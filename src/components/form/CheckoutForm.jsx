import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import useCart from "../../hooks/useCart";
import "./CheckoutForm.css";
const CheckoutForm = () => {
  const [cart] = useCart();
  const totalCost = cart.reduce((acc, cur) => acc + cur.price, 0);
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useAuth();
  const axios = useAxios();
  const navigate = useNavigate();
  const courseObject = cart.reduce((acc, item, index) => {
    acc[index] = item;
    return acc;
  }, {});

  useEffect(() => {
    if (totalCost) {
      getClientSecret(totalCost);
    }
  }, [totalCost]);

  // Get Client Secret
  const getClientSecret = async (price) => {
    try {
      const { data } = await axios.post("/create-payment-intent", {
        price: parseFloat(totalCost),
      });
      console.log(data);
      setClientSecret(data.clientSecret);
    } catch (err) {
      console.log(err);
    }
  };

  //   // Post hangle Payment
  const handlePayment = async (e) => {
    const form = e.target;
    const address = form.address.value;
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card,
      billing_details: {
        email: user?.email,
        name: user?.displayName,
      },
    });
    if (error) {
      console.log("Payment Error", error);
    } else {
      console.log(paymentMethod);
    }

    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });

    if (confirmError) {
      console.log("confirmErr", confirmError);
    } else {
      if (paymentIntent.status === "succeeded") {
        const paymentInfo = {
          address,
          email: user?.email,
          name: user?.displayName,
          status: "completed",
          transId: paymentIntent.id,
          carts: cart.map((item) => ({
            title: item?.title,
            name: item?.name,
            categoryId: item?.categoryId,
            stock: item?.stock,
            description: item?.description,
            highlights: item?.highlights,
            specifications: item?.specifications,
            images: item?.images,
            brand: item?.brand,
            rating: item?.rating,
            warranty: item?.warranty,
            returnPolicy: item?.returnPolicy,
            userName: item?.userName,
            photoURL: item?.photoURL,
            quantity: item?.quantity,
          })),
        };
        try {
          const { data } = await axios.post("/payment", paymentInfo);
          console.log(data);
          toast.success("Payment Successfully !");
        } catch (err) {
          console.log(err);
        }
      }
    }
  };

  return (
    <div className="grid grid-cols-1 space-y-10 mt-5 items-center justify-center">
      <form onSubmit={handlePayment}>
        <div className="mb-4">
          <label className="block text-gray-700 text-md font-semibold mb-1">
            Street Address
          </label>
          <input
            type="text"
            id="address"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Address Here.."
          />
        </div>

        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex items-center gap-4">
          <button
            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-bold "
            type="submit"
          >
            Pay {totalCost.toFixed(2)}
          </button>
          <button className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7ed56f] focus-visible:ring-offset-2">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;

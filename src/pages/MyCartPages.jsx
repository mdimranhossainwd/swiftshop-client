import { useState } from "react";
import { NavLink } from "react-router-dom";
import useCart from "../hooks/useCart";

const MyCartPages = () => {
  const [cart] = useCart();
  const [quantity, setQuantity] = useState();

  // Increase quantity
  const increaseQuantity = () => setQuantity((quantity) => quantity + 1);

  // Decrease quantity but not below 1
  const decreaseQuantity = () =>
    setQuantity((quantity) => (quantity > 1 ? quantity - 1 : 1));

  return (
    <div className="container mx-auto">
      <div className="my-12">
        <h3 className="text-3xl font-semibold font-oswald text-center">
          || Your Cart Page ||
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 p-4  min-h-screen">
        {/* Product List Section */}
        <div className="flex-1 bg-white rounded-lg  p-6">
          <table className="table w-full ">
            <thead className="w-full border-b border-t text-black text-center">
              <tr>
                <th className="px-4 py-3">Product Name</th>
                <th className="px-4 py-3">Quantity</th>
                <th className="px-4 py-3">SubTotal</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="w-full py-4 text-center">
              {cart?.map((item) => (
                <tr className="py-4 border-b" key={item._id}>
                  <div>
                    <td className="flex items-center gap-4 p-8">
                      <img
                        src={item?.images[0]}
                        className="w-24 h-20 border"
                        alt=""
                      />
                      <div className="">
                        <h4 className="text-md bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 bg-clip-text text-transparent font-medium">
                          {item?.name}
                        </h4>
                        <span className="p-4 font-semibold">
                          ${(item?.price * item?.quantity).toFixed(2)}
                        </span>
                      </div>
                    </td>
                  </div>

                  <td className="font-medium">
                    <button
                      onClick={decreaseQuantity}
                      className="px-2 py-1 mx-3 text-lg rounded-md"
                    >
                      -
                    </button>
                    {item?.quantity}
                    <button
                      onClick={increaseQuantity}
                      className="px-2 py-1 mx-3 text-lg rounded-md"
                    >
                      +
                    </button>
                  </td>
                  <td className="font-medium">
                    {
                      <span className="p-4 font-semibold">
                        ${(item?.price * item?.quantity).toFixed(2)}
                      </span>
                    }
                  </td>
                  <th>
                    <NavLink to={`/dashboard/update/${item?._id}`}>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide mt-2 lucide-trash"
                        >
                          <path d="M3 6h18" />
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        </svg>
                      </button>
                    </NavLink>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <div className="flex justify-between mt-6">
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md">
              Continue Shopping
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">
              Delete All
            </button>
          </div> */}
        </div>

        {/* Cart Summary Section */}
        <div className="flex-1 max-w-sm bg-white rounded-lg shadow-md p-6">
          <div className="bg-red-100 text-center py-4 rounded-md mb-6">
            <p>
              Congratulations! You've got{" "}
              <span className="font-semibold text-red-600">Free Shipping!</span>
            </p>
          </div>
          <h3 className="text-lg font-semibold mb-4">Cart Totals</h3>
          <div className="space-y-4">
            <div className="flex justify-between text-lg font-medium">
              <p>Subtotal:</p>
              {/* <span>${(product.price * quantity).toFixed(2)}</span> */}
            </div>
            <label htmlFor="country" className="block text-gray-700">
              Estimate Shipping Rates:
            </label>
            <select id="country" className="w-full px-3 py-2 border rounded-md">
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              <option value="uk">United Kingdom</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCartPages;

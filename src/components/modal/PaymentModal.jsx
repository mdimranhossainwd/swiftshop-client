import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Modal from "../../shared/Modal";
import CheckoutForm from "../form/CheckoutForm";

const stripePromise = loadStripe(
  import.meta.env.VITE_SWIFTSHOP_STRIPE_PK_TEST_KEY
);

const PaymentModal = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Secure Payment">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </Modal>
    </>
  );
};

export default PaymentModal;

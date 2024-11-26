"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useCartStore } from "@/store";
import { usePaymentIntent } from "@/hooks/use-payment-intent";
import { CheckoutForm } from "./CheckoutForm";
import { CircleLoader } from "react-spinners";

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
if (!stripeKey) {
  throw new Error(
    "Stripe publishable key is not defined in the environment variables.",
  );
}
const stripePromise = loadStripe(stripeKey);

const StripePaymentForm = () => {
  const { cartItems } = useCartStore();

  const {
    clientSecret,
    amount,
    error: fetchError,
  } = usePaymentIntent(cartItems);

  if (fetchError) {
    return <p className="text-red-500">Error: {fetchError}</p>;
  }

  if (!clientSecret) {
    return <CircleLoader />;
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <div className="w-full px-4 py-2">
        <h1 className="text-xl font-semibold">Restaurant App</h1>
        <CheckoutForm amount={amount} />
      </div>
    </Elements>
  );
};

export default StripePaymentForm;

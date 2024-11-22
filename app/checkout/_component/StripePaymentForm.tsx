"use client";

import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useCartStore } from "@/store";
import { usePaymentIntent } from "@/hooks/use-payment-intent";
import { CheckoutForm } from "./CheckoutForm";
import { EmailInput } from "./EmailInput";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "",
);

const StripePaymentForm = () => {
  const { cartItems } = useCartStore();
  const [email, setEmail] = useState("");
  const [isReady, setIsReady] = useState(false);

  const {
    clientSecret,
    amount,
    error: fetchError,
  } = usePaymentIntent(isReady ? cartItems : [], email);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleProceed = () => {
    if (email.trim() === "") {
      alert("Please provide a valid email.");
      return;
    }
    setIsReady(true);
  };

  if (fetchError) {
    return <p className="text-red-500">Error: {fetchError}</p>;
  }

  if (!clientSecret) {
    return (
      <div className="p-4">
        <h1 className="mb-4 text-xl font-semibold">Restaurant App</h1>
        <EmailInput email={email} onChange={handleEmailChange} />
        <button
          onClick={handleProceed}
          className="mt-4 w-full rounded bg-blue-500 px-4 py-2 text-white"
        >
          Proceed to Payment
        </button>
      </div>
    );
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <div className="w-full p-4">
        <h1 className="mb-4 text-xl font-semibold">Restaurant App</h1>
        <CheckoutForm amount={amount} email={email} />
      </div>
    </Elements>
  );
};

export default StripePaymentForm;

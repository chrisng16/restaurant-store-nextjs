"use client";

import React, { useCallback, useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { useCartStore } from "@/store";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// This test secret API key is a placeholder. Don't include personal details in requests with this key.
// To see your test secret API key embedded in code samples, sign in to your Stripe account.
// You can also find your test secret API key at https://dashboard.stripe.com/test/apikeys.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "",
);

const CheckoutForm = () => {
  const { cartItems } = useCartStore();
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  //   const fetchClientSecret = useCallback(() => {
  //     // Create a Checkout Session
  //     return fetch("/api/checkout", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(cartItems),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => data.clientSecret);
  //   }, []);

  useEffect(() => {
    const fetchClientSecret = async () => {
      console.log(cartItems.length);
      if (!cartItems.length) {
        return;
      }
      try {
        console.log(JSON.stringify(cartItems));
        const response = await fetch("/api/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(cartItems),
        });

        const { clientSecret } = await response.json();
        console.log(clientSecret);
        setClientSecret(clientSecret);
      } catch (error) {
        console.error("Error fetching client secret:", error);
      }
    };

    fetchClientSecret();
  }, [cartItems]);

  const options = { clientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
};

export default CheckoutForm;

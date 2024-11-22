import React from "react";
import StripePaymentForm from "./_component/StripePaymentForm";
import Cart from "@/components/body/cart/Cart";

const CheckoutPage = () => {
  return (
    <div className="relative mx-auto grid h-auto w-full max-w-6xl gap-2 rounded-xl p-2 sm:grid-cols-2">
      <div className="sticky top-16 flex h-auto max-h-[calc(100vh-5rem)] w-full flex-col items-center justify-center rounded border sm:px-2">
        <Cart showButtons={false} />
      </div>

      <div className="flex h-full w-full items-center justify-center rounded border py-4">
        <StripePaymentForm />
      </div>
    </div>
  );
};

export default CheckoutPage;

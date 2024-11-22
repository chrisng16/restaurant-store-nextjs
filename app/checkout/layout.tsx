import React from "react";
import CheckoutHeader from "./_component/CheckoutHeader";

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full">
      <CheckoutHeader />
      {children}
    </div>
  );
}

import React from "react";

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mx-auto w-full">{children}</div>;
}

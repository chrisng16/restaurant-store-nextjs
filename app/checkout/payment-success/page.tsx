"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const PaymentSuccessPage = () => {
  const params = useSearchParams();
  let searchParams: Record<string, string>[] = [];
  params.forEach((value, key) => searchParams.push({ [key]: value }));

  return (
    <div>
      {searchParams.map((searchParam) => (
        <span>{JSON.stringify(searchParam)}</span>
      ))}
    </div>
  );
};

export default PaymentSuccessPage;

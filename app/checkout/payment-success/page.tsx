"use client";

import { PaymentInfo } from "@/actions/createOrder";
import Cart from "@/components/body/cart/Cart";
import { Button } from "@/components/ui/button";
// import { useCartStore } from "@/store";
import React, { useEffect, useState } from "react";

const PaymentSuccessPage = () => {
  // const { resetCart } = useCartStore();

  const [paymentData, setPaymentData] = useState<PaymentInfo | null>(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem("paymentData");
    if (storedData) {
      setPaymentData(JSON.parse(storedData));
      // Optionally clear sessionStorage to prevent reuse
      sessionStorage.removeItem("paymentData");
    }
  }, []);

  if (!paymentData) {
    return <p>Loading payment details...</p>;
  }

  const confirmMessage = (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-2xl px-4 2xl:px-0">
        <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Thanks for your order!
        </h2>
        <p className="mb-6 text-gray-500 dark:text-gray-400 md:mb-8">
          Your order{" "}
          <a
            href="#"
            className="font-medium text-gray-900 hover:underline dark:text-white"
          >
            #{paymentData.orderId}
          </a>{" "}
          is processed. We will notify you by email once your order is ready.
        </p>
        <div className="mb-6 space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800 sm:space-y-2 md:mb-8">
          <dl className="items-center justify-between gap-4 sm:flex">
            <dt className="mb-1 font-normal text-gray-500 dark:text-gray-400 sm:mb-0">
              Name
            </dt>
            <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
              {paymentData.userInfo.name}
            </dd>
          </dl>
          <dl className="items-center justify-between gap-4 sm:flex">
            <dt className="mb-1 font-normal text-gray-500 dark:text-gray-400 sm:mb-0">
              Email
            </dt>
            <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
              {paymentData.userInfo.email}
            </dd>
          </dl>
          <dl className="items-center justify-between gap-4 sm:flex">
            <dt className="mb-1 font-normal text-gray-500 dark:text-gray-400 sm:mb-0">
              Phone
            </dt>
            <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
              {paymentData.userInfo.phone}
            </dd>
          </dl>
          <dl className="items-center justify-between gap-4 sm:flex">
            <dt className="mb-1 font-normal text-gray-500 dark:text-gray-400 sm:mb-0">
              Order Time
            </dt>
            <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
              {paymentData.time}
            </dd>
          </dl>
          <dl className="items-center justify-between gap-4 sm:flex">
            <dt className="mb-1 font-normal text-gray-500 dark:text-gray-400 sm:mb-0">
              Order Date
            </dt>
            <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
              {paymentData.date}
            </dd>
          </dl>
          <dl className="items-center justify-between gap-4 sm:flex">
            <dt className="mb-1 font-normal text-gray-500 dark:text-gray-400 sm:mb-0">
              Payment Method
            </dt>
            <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
              {`${paymentData.cardBrand.toLocaleUpperCase()} ${paymentData.last4}`}
            </dd>
          </dl>
          <dl className="items-center justify-between gap-4 sm:flex">
            <dt className="mb-1 font-normal text-gray-500 dark:text-gray-400 sm:mb-0">
              Amount Paid
            </dt>
            <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
              ${(paymentData.amount / 100).toFixed(2)}
            </dd>
          </dl>
        </div>
        <div className="flex items-center space-x-4">
          <Button className="px-5 py-2.5 text-sm font-medium focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100">
            Return to shopping
          </Button>
        </div>
      </div>
    </section>
  );

  return (
    <div className="relative mx-auto grid h-auto w-full max-w-6xl gap-2 rounded-xl p-2 sm:grid-cols-2">
      <div className="flex h-full w-full items-start justify-center py-4">
        {confirmMessage}
      </div>
      <div className="sticky top-16 flex h-auto max-h-[calc(100vh-5rem)] w-full flex-col items-center justify-center sm:px-2">
        <Cart
          className="h-auto rounded border"
          showButtons={false}
          showModifier={false}
          title={`Order #${paymentData.orderId}`}
        />
      </div>
    </div>
  );
};

export default PaymentSuccessPage;

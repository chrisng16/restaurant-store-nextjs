import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { UserInfoCollectionForm } from "./UserInfoCollectionForm";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PaymentMethod } from "@stripe/stripe-js";

interface CheckoutFormProps {
  amount: number;
}

export type BillingDetails = {
  name: string;
  email: string;
  phone: string;
};

export const ActiveSection = {
  USER: "user-info",
  PAYMENT: "payment-info",
};

const defaultBillingDetails = {
  name: "",
  email: "",
  phone: "",
};

export const CheckoutForm: React.FC<CheckoutFormProps> = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [billingDetails, setBillingDetails] = useState<BillingDetails>(
    defaultBillingDetails,
  );
  const [activeSection, setActiveSection] = useState<string>(
    ActiveSection.USER,
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);
    setError(null);

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout/payment-success`,
        expand: ["payment_method"],
      },
      redirect: "if_required",
    });

    if (result?.error) {
      setError(result?.error?.message || "Payment failed. Please try again.");
      setLoading(false);
      return;
    }

    if (result.paymentIntent?.status === "succeeded") {
      const payment_method = result.paymentIntent
        .payment_method as PaymentMethod;
      const { card } = payment_method;
      const dateTimeFormatOptions = {
        timeZone: "America/Los_Angeles",
        hour12: true,
      };
      const dateTime = new Date(result.paymentIntent.created * 1000)
        .toLocaleString("en-US", dateTimeFormatOptions)
        .split(",");

      const paymentData = {
        date: dateTime[0],
        time: dateTime[1],
        name: billingDetails.name,
        phone: billingDetails.phone,
        email: billingDetails.email,
        cardBrand: card?.brand,
        last4: card?.last4,
      };

      sessionStorage.setItem("paymentData", JSON.stringify(paymentData));

      // console.log(JSON.stringify(paymentData));
      // try {
      //   // Send confirmation email to the customer
      //   const response = await fetch("/api/send-confirmation-email", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify({
      //       email: billingDetails.email,
      //       name: billingDetails.name,
      //       amount: (amount / 100).toFixed(2),
      //     }),
      //   });

      //   if (!response.ok) {
      //     throw new Error("Failed to send confirmation email.");
      //   }

      //   // Redirect to payment success page after email is sent
      window.location.href = `${window.location.origin}/checkout/payment-success`;
      // } catch (emailError) {
      //   // Handle email sending failure
      //   setError(
      //     "Payment succeeded, but we failed to send a confirmation email.",
      //   );
      //   console.error(emailError);
      // }
    }

    setSuccess(true);
    setLoading(false);
  };

  return (
    <Accordion type="single" value={activeSection} className="w-full">
      <AccordionItem
        value="user-info"
        onClick={() => setActiveSection("user-info")}
      >
        <AccordionTrigger>1. Customer Information</AccordionTrigger>
        <AccordionContent>
          <UserInfoCollectionForm
            setActiveSection={setActiveSection}
            setBillingDetails={setBillingDetails}
            billingDetails={billingDetails}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="payment-info"
        onClick={() => setActiveSection("payment-info")}
      >
        <AccordionTrigger>2. Payment Information</AccordionTrigger>
        <AccordionContent>
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <PaymentElement
              options={{
                layout: "accordion",
              }}
            />
            {error && <p className="mt-4 text-red-500">{error}</p>}
            <Button
              type="submit"
              disabled={loading}
              className={`mt-4 w-full ${
                loading ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              {loading ? "Processing..." : `Pay $${(amount / 100).toFixed(2)}`}
            </Button>
            {success && (
              <p className="mt-4 text-green-500">Payment successful!</p>
            )}
          </form>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );

  // return lodash.isEqual(billingDetails, defaultBillingDetails) ? (
  //   <UserInfoCollectionForm setBillingDetails={setBillingDetails} />
  // ) : (
  //   <form onSubmit={handleSubmit} className="w-full space-y-4">
  //     <PaymentElement
  //       options={{
  //         layout: "accordion",
  //       }}
  //     />
  //     {error && <p className="mt-4 text-red-500">{error}</p>}
  //     <button
  //       type="submit"
  //       disabled={loading}
  //       className={`mt-4 w-full rounded bg-blue-500 px-4 py-2 text-white ${
  //         loading ? "cursor-not-allowed opacity-50" : ""
  //       }`}
  //     >
  //       {loading ? "Processing..." : `Pay $${(amount / 100).toFixed(2)}`}
  //     </button>
  //     {success && <p className="mt-4 text-green-500">Payment successful!</p>}
  //   </form>
  // );
};

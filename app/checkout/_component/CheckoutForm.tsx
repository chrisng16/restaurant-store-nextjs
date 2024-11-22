import {
  AddressElement,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useState } from "react";

interface CheckoutFormProps {
  amount: number;
  email: string;
}

export const CheckoutForm: React.FC<CheckoutFormProps> = ({
  amount,
  email,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);
    setError(null);

    const address = await elements.getElement("address")?.getValue();

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout/payment-success`,
        payment_method_data: {
          billing_details: {
            name: address?.value.name,
            email,
          },
        },
      },
    });

    if (error) {
      setError(error.message || "Payment failed. Please try again.");
      setLoading(false);
      return;
    }

    setSuccess(true);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <AddressElement
        options={{
          mode: "billing",
          allowedCountries: ["us"],
          blockPoBox: true,
          fields: { phone: "always" },
          validation: { phone: { required: "always" } },
        }}
      />
      <PaymentElement
        options={{
          layout: "accordion",
          fields: { billingDetails: { email: "never" } },
        }}
      />
      {error && <p className="mt-4 text-red-500">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className={`mt-4 w-full rounded bg-blue-500 px-4 py-2 text-white ${
          loading ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        {loading ? "Processing..." : `Pay $${(amount / 100).toFixed(2)}`}
      </button>
      {success && <p className="mt-4 text-green-500">Payment successful!</p>}
    </form>
  );
};

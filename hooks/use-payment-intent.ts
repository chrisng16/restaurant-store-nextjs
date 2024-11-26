import { useState, useEffect } from "react";
import { CartItem } from "@/store";

interface PaymentIntentResponse {
    clientSecret: string;
    amount: number;
    paymentIntentId: string;
}

export const usePaymentIntent = (cartItems: CartItem[]) => {
    const [clientSecret, setClientSecret] = useState<string | null>(null);
    const [amount, setAmount] = useState<number>(0);
    const [paymentIntentId, setPaymentIntentId] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!cartItems.length) return;

        const fetchClientSecret = async () => {
            try {
                const response = await fetch("/api/create-or-update-payment-intent", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ cartItems, paymentIntentId }),
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch payment intent.");
                }

                const data: PaymentIntentResponse = await response.json();
                setClientSecret(data.clientSecret);
                setAmount(data.amount);
                setPaymentIntentId(data.paymentIntentId); // Save the payment intent ID
            } catch (err) {
                setError(err instanceof Error ? err.message : "Unknown error occurred.");
            }
        };

        fetchClientSecret();
    }, [cartItems, paymentIntentId]);

    return { clientSecret, amount, error, paymentIntentId };
};

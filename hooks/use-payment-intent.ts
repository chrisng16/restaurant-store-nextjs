import { useState, useEffect } from "react";
import { CartItem } from "@/store";


interface PaymentIntentResponse {
    clientSecret: string;
    amount: number;
}

export const usePaymentIntent = (cartItems: CartItem[], email: string) => {
    const [clientSecret, setClientSecret] = useState<string | null>(null);
    const [amount, setAmount] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!cartItems.length || !email) return;

        const fetchClientSecret = async () => {
            try {
                const response = await fetch("/api/create-payment-intent", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ cartItems, email }),
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch payment intent.");
                }

                const data: PaymentIntentResponse = await response.json();
                setClientSecret(data.clientSecret);
                setAmount(data.amount);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Unknown error occurred.");
            }
        };

        fetchClientSecret();
    }, [cartItems, email]);

    return { clientSecret, amount, error };
};

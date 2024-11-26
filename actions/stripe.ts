"use server"

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
    apiVersion: '2024-10-28.acacia',
});

export const retrievePaymentIntent = async (paymentIntentClientSecret: string) => {
    const existingIntent = await stripe.paymentIntents.retrieve(paymentIntentClientSecret)

    return existingIntent
}
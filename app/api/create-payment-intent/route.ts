import { calculateCartItem } from '@/actions/item';
import { getItemByMenuNum } from '@/data/item';
import { CartItem } from '@/store';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
    apiVersion: '2024-10-28.acacia',
});

const getAmount: (cartItems: CartItem[]) => Promise<number> = async (cartItems: CartItem[]) => {
    let total = 0

    const promises = cartItems.map(async item => await calculateCartItem(item))
    const results = await Promise.all(promises)
    results.map(result => total += result.itemTotal * result.qty)

    return Math.round(total * 1.14375)
}

export async function POST(req: NextRequest) {
    try {
        const { cartItems, email } = await req.json()
        const amount = await getAmount(cartItems)

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            receipt_email: email
        });

        return NextResponse.json({ clientSecret: paymentIntent.client_secret, amount });
    } catch (error: any) {
        console.error('PaymentIntent creation failed:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}

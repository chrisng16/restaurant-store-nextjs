import { CartItem } from '@/store';
import { OptionChoice } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-10-28.acacia',
});

const optionsToString: (options: OptionChoice[]) => string = (options: OptionChoice[]) => {
    return Array.from(options, (optionChoice) => optionChoice.name).join(
        ", ",
    )
}

export async function POST(req: NextRequest) {
    const cartItems = await req.json();

    const lineItems = cartItems?.map((cartItem: CartItem) => ({
        price_data: {
            currency: 'usd',
            product_data: {
                name: `${cartItem.menuNum}. ${cartItem.name}`, // Customize based on item data
                description: `${cartItem.options?.length ? optionsToString(cartItem.options) : cartItem.name}`,
                // metadata: { ...cartItem.options },
            },
            unit_amount: cartItem.itemTotal,
        },
        quantity: cartItem.qty,
    }));

    console.log(lineItems)

    try {
        const session = await stripe.checkout.sessions.create({
            ui_mode: 'embedded',
            automatic_tax: { enabled: true },
            line_items: lineItems,
            mode: 'payment',
            return_url: `${req.url}/return?session_id={CHECKOUT_SESSION_ID}`
        });

        return NextResponse.json({ clientSecret: session.client_secret });
    } catch (error: any) {
        console.log(error)
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

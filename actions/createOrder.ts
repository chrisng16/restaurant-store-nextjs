"use server"
import { db } from "@/lib/db";
import { OrderStatus } from "@prisma/client";
import { CartItem } from "@/store";

export type PaymentInfo = {
    paymentId: string
    date: string;
    time: string;
    userInfo: { name: string; phone: string; email: string };
    cardBrand: string;
    last4: string;
    orderId?: string
    amount: number
}

export const createOrder = async (cartItems: CartItem[], paymentInfo: PaymentInfo) => {
    const newOrder = await db.order.create({
        data: {
            cartItems,
            orderStatus: OrderStatus.PAID,
            paymentInfo,
        }
    })
    return { message: "Order Created", success: true, orderId: newOrder.id }
}
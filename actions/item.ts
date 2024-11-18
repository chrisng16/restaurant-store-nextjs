"use server"

import { calculateItemTotal } from "@/data/item";
import { CartItem } from "@/store";

export async function calculateCartItem(cartItem: CartItem): Promise<CartItem> {
    const calculatedCartItem = await calculateItemTotal(cartItem)
    return calculatedCartItem
}
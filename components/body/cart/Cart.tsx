"use client";
import { useCartStore } from "@/store";
import React from "react";
import CartItemModifier from "./CartItemModifier";

const Cart = () => {
  const { cartItems, cartTotal, itemCount, updateCartItem } = useCartStore();
  return (
    <div className="sticky top-16 h-auto divide-y">
      <span className="p-2 text-3xl">Cart ({itemCount} items)</span>
      <div className="divide-y">
        {cartItems.map((cartItem, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-2 py-2"
          >
            <div className="grid p-1 leading-tight">
              <h3 className="text-sm font-semibold">{`${cartItem.menuNum}. ${cartItem.name}`}</h3>
              {cartItem.options && (
                <span className="line-clamp-2 pb-1 text-xs leading-tight text-muted-foreground">
                  {Array.from(cartItem?.options, (item) => item.name).join(
                    ", ",
                  )}
                </span>
              )}
              <span className="text-sm">
                ${((cartItem.itemTotal * cartItem.qty) / 100).toFixed(2)}
              </span>
            </div>
            <div>
              <CartItemModifier item={cartItem} updateCartItem = {updateCartItem} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;

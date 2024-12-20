"use client";
import { useCartStore } from "@/store";
import React from "react";
import CartItemModifier from "./CartItemModifier";
import { Button } from "@/components/ui/button";
import CartResetAlertDialog from "./CartResetAlertDialog";
import CartTooltip from "./Tooltip";
import { cn } from "@/lib/utils";

const Cart = ({
  showButtons = true,
  showModifier = true,
  className,
  title,
}: {
  showButtons?: boolean;
  className?: string;
  showModifier?: boolean;
  title?: string;
}) => {
  const { cartItems, cartTotal, itemCount, updateCartItem } = useCartStore();

  return (
    <div
      className={cn(
        "sticky top-16 m-0 flex h-[calc(100svh-4rem)] w-full flex-col justify-between p-2 py-4 md:min-w-[350px]",
        className,
      )}
    >
      <div className="gap-2 divide-y">
        <p className="pb-2 text-2xl">{title || `Cart (${itemCount} items)`}</p>
        <div
          className={`${showButtons ? "max-h-[calc(100vh-344px)]" : "max-h-[calc(100vh-256px)]"} divide-y overflow-auto`}
        >
          {cartItems.map((cartItem, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-2"
            >
              <div className="grid p-1 leading-tight">
                <h3 className="text-sm font-semibold">{`${cartItem.menuNum}. ${cartItem.name}`}</h3>
                {cartItem.options && (
                  <span className="line-clamp-2 text-xs leading-tight text-muted-foreground">
                    {Array.from(cartItem?.options, (item) => item.name).join(
                      ", ",
                    )}
                  </span>
                )}
                <span className="text-sm">
                  ${((cartItem.itemTotal * cartItem.qty) / 100).toFixed(2)}
                </span>
              </div>
              {showModifier && (
                <div className="pr-1">
                  <CartItemModifier
                    item={cartItem}
                    updateCartItem={updateCartItem}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mr-2 flex flex-col gap-2 md:mr-0">
        <div>
          <div className="border border-x-0 py-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-normal">Sub-total</span>
              <span> ${(cartTotal / 100).toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex gap-1 font-normal">
                Service Fee
                <CartTooltip>
                  This 5.0% service fee (minumum $1) helps us operate this
                  website.
                </CartTooltip>
              </div>
              <span> ${((cartTotal * 0.05) / 100).toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex gap-1 font-normal">
                <span>{title ? "Tax" : "Estimated Tax"}</span>
                {!title && (
                  <CartTooltip>
                    <p className="font-semibold">Tax: 9.375%</p>
                    <p>Finalized tax will be shown on your order receipt.</p>
                  </CartTooltip>
                )}
              </div>
              <span> ${((cartTotal * 0.09375) / 100).toFixed(2)}</span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2">
            <span className="font-semibold">
              {title ? "Paid:" : "Total due:"}
            </span>
            <span> ${((cartTotal * 1.14375) / 100).toFixed(2)}</span>
          </div>
        </div>
        {showButtons && (
          <div className="space-y-2 px-10 pb-2">
            <Button
              variant="success"
              disabled={itemCount === 0}
              className="w-full"
            >
              <a href="/checkout">Check Out</a>
            </Button>
            <CartResetAlertDialog>
              <Button variant="destructive" className="w-full">
                Reset Cart
              </Button>
            </CartResetAlertDialog>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

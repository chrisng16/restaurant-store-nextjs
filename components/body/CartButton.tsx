"use client";
import React from "react";
import { Button } from "../ui/button";
import { Icons } from "../Icons";
import { useCartStore } from "@/store";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Cart from "./cart/Cart";

interface CartButtonProps {
  variant: "fab" | "button";
}

const CartButton = ({ variant }: CartButtonProps) => {
  const { itemCount } = useCartStore();
  return (
    <Sheet>
      <SheetTrigger asChild>
        {variant === "button" ? (
          // Header Button
          <Button className="hidden sm:flex lg:hidden">
            <Icons.Cart className="size-4" strokeWidth={2} />{" "}
            <span className="text-base leading-10">{itemCount}</span>
          </Button>
        ) : (
          // Fab Button
          <Button
            variant="fab"
            className="flex size-14 rounded-full border-[1.5px] border-color-main bg-color-secondary p-4 text-color-main shadow-md sm:hidden"
          >
            <Icons.Cart className="size-6" strokeWidth={1.75} />
            <div className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full border border-color-secondary bg-color-main text-xs text-color-secondary">
              <span>{itemCount}</span>
            </div>
          </Button>
        )}
      </SheetTrigger>
      <SheetContent className="w-full max-w-[384px] p-2 pt-8">
        <SheetHeader className="sr-only">
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription>Cart Drawer</SheetDescription>
        </SheetHeader>
        <Cart />
      </SheetContent>
    </Sheet>
  );
};

export default CartButton;

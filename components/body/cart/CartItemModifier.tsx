import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/store";

import React from "react";

const CartItemModifier = ({
  item,
  updateCartItem,
}: {
  item: CartItem;
  updateCartItem: (item: CartItem) => void;
}) => {
  const handleModifierBtnClicked = (type: "add" | "subtract") => {
    if (type === "add") {
      updateCartItem({
        ...item,
        qty: item.qty + 1,
      });
    }

    if (type === "subtract") {
      updateCartItem({
        ...item,
        qty: item.qty - 1,
      });
    }
  };
  return (
    <div className="flex items-center gap-2 rounded-full bg-muted shadow-md">
      <Button
        variant="secondary"
        size="icon"
        className="rounded-full bg-white/80 text-color-secondary shadow-sm"
        onClick={() => handleModifierBtnClicked("subtract")}
      >
        <Icons.MinusCircle />
      </Button>
      <span className="flex w-8 items-center justify-center text-center text-sm font-semibold">
        {item.qty} <Icons.X className="size-2.5" />
      </span>
      <Button
        variant="secondary"
        size="icon"
        className="rounded-full bg-white/80 text-color-secondary shadow-sm"
        onClick={() => handleModifierBtnClicked("add")}
      >
        <Icons.PlusCircle />
      </Button>
    </div>
  );
};

export default CartItemModifier;

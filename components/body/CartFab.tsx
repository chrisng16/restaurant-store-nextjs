import React from "react";
import { Button } from "../ui/button";
import { Icons } from "../Icons";

const CartFab = () => {
  return (
    <Button
      variant="fab"
      className="flex size-14 rounded-full border-[1.5px] border-color-main bg-color-secondary p-4 text-color-main shadow-md"
    >
      <Icons.Cart className="size-6" strokeWidth={1.75} />
      <div className="border absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full border-color-secondary bg-color-main text-xs text-color-secondary">
        <span>0</span>
      </div>
    </Button>
  );
};

export default CartFab;

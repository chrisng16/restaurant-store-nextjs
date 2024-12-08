import React from "react";
import CardsView from "./card-view/CardsView";
import Cart from "./cart/Cart";
import CartButton from "./CartButton";

const Body = () => {
  return (
    <div className="flex max-w-full">
      <div className="min-w-0 grow">
        <CardsView />
      </div>
      <div className="hidden w-[380px] shrink-0 border-2 border-l px-2 lg:block">
        <Cart showButtons={true} />
      </div>
      <div className="md:hidden">
        <CartButton variant="fab" />
      </div>
    </div>
  );
};

export default Body;

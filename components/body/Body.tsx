import React from "react";
import CardsView from "./card-view/CardsView";
import Cart from "./cart/Cart";
import CartFab from "./CartFab";

const Body = () => {
  return (
    <div className="flex max-w-full">
      <div className="min-w-0 grow">
        <CardsView />
      </div>
      <div className="hidden w-[350px] shrink-0 border-2 border-l px-2 lg:block">
        <Cart />
      </div>
      <div className="md:hidden">
        <CartFab />
      </div>
    </div>
  );
};

export default Body;

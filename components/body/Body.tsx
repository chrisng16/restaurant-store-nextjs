import React from "react";
import CardsView from "./card-view/CardsView";
import Cart from "./Cart";
import CartFab from "./CartFab";

const Body = () => {
  return (
    <div className="grid h-auto grid-cols-1 lg:grid-cols-8">
      <div className="col-span-6 w-full">
        <CardsView />
      </div>
      <div className="col-span-2 hidden w-full border-2 border-l px-2 lg:block">
        <Cart />
      </div>

      <div className="md:hidden">
        <CartFab />
      </div>
    </div>
  );
};

export default Body;

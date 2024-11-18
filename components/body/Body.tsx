import React from "react";
import CardsView from "./card-view/CardsView";
import Cart from "./cart/Cart";
import CartFab from "./CartFab";

const Body = () => {
  return (
    <div className="grid h-auto grid-cols-1 lg:grid-cols-8">
      <div className="col-span-5 w-full xl:col-span-6">
        <CardsView />
      </div>
      <div className="col-span-3 hidden w-full border-2 border-l px-2 lg:block xl:col-span-2">
        <Cart />
      </div>

      <div className="md:hidden">
        <CartFab />
      </div>
    </div>
  );
};

export default Body;

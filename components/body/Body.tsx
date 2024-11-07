import React from "react";
import CardsView from "./card-view/CardsView";
import Cart from "./Cart";

const Body = () => {
  return (
    <div className="grid h-auto grid-cols-1 lg:grid-cols-8">
      <div className="col-span-6 w-full">
        <CardsView />
      </div>
      <div className="hidden lg:block col-span-2 w-full border-2 border-l px-2">
        <Cart />
      </div>
    </div>
  );
};

export default Body;

import React from "react";
import CardsView from "./card-view/CardsView";
import Cart from "./Cart";

const Body = () => {
  return (
    <div className="flex h-auto">
      <CardsView />
      <Cart />
    </div>
  );
};

export default Body;

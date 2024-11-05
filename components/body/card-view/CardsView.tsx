import React from "react";
import HorizontalScollArea from "./HorizontalScollArea";
import CardsWrapper from "./CardsWrapper";

const categories: Array<string> = [
  "Appetizers",
  "Beef Noodle Soups",
  "Chicken Noodle Soups",
  "Chef's Specials",
  "Special Combos (For 2 Persons)",
  "Chow Fun and Chow Mein",
  "Rice Plates",
  "Vegeterian Dishes",
  "Congees",
  "Party Trays",
  "Beverages",
  "Smoothies",
  "Sweet Dessert",
  "Extras",
];

const CardsView = () => {
  return (
    <div className="relative h-auto w-full">
      <div className="max-w-screen sticky top-16 block w-full shrink grow bg-white/10 backdrop-blur z-10">
        <HorizontalScollArea items={categories} />
      </div>
      <CardsWrapper />
    </div>
  );
};

export default CardsView;

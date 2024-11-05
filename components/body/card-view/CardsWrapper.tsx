import React from "react";
import Card from "./Card";
import data from "@/lib/data";
import TopOfViewportComponent from "./TopOfViewportComponent";

const foodItems = [...data];
foodItems.sort((a, b) =>
  Number(a.menuNum.replace(/\D+/g, "")) > Number(b.menuNum.replace(/\D+/g, ""))
    ? 1
    : -1,
);

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

const CardsWrapper = () => {
  return (
    <div>
      <TopOfViewportComponent />
      {categories.map((category, index) => (
        <div key={index} className="p-2 pb-10">
          <h3 id={category} className="scroll-mt-28 p-4 pt-0 text-3xl">
            {category}
          </h3>
          <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3">
            {foodItems
              .filter((item) => item.category === category)
              .map((filteredItem, i) => (
                <Card key={i} item={filteredItem} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsWrapper;

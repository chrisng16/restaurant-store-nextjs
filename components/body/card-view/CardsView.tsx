"use client";
import React from "react";
import HorizontalScollArea from "./HorizontalScollArea";
import data from "@/lib/data";
import Card from "./Card";
import useActiveDiv from "@/hooks/use-active-element";

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
  const offset = 120; // Pixels from the top of the viewport
  const activeDiv = useActiveDiv(categories, { offset });

  return (
    <div className="relative h-auto w-full">
      
      <div className="max-w-screen sticky top-16 z-10 block w-full bg-white">
        <HorizontalScollArea items={categories} activeElement={activeDiv.id} />
      </div>

      <div>
        {categories.map((category, index) => (
          <div data-id={category} key={index} className="p-2 pb-10 pt-4">
            <h3 id={category} className="scroll-mt-28 p-4 pt-0 text-3xl">
              {category}
            </h3>
            <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3">
              {data
                .filter((item) => item.category === category)
                .map((filteredItem, i) => (
                  <Card key={i} item={filteredItem} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsView;

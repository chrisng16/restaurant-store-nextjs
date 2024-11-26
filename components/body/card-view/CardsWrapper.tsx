"use client";
import { Item } from "@/data/item";
import React from "react";
import Card from "./Card";
import { useSearchStore } from "@/store";

type CardsWrapperProps = {
  categories: string[];
  items: Item[];
};

const CardsWrapper = ({ categories, items }: CardsWrapperProps) => {
  const { searchKey } = useSearchStore();

  const normalizeString = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const searchFilter = (item: Item, searchKey: string) => {
    return (
      normalizeString(item.name.toLowerCase()).includes(
        normalizeString(searchKey.toLowerCase()),
      ) ||
      normalizeString(item.desc.toLowerCase()).includes(
        normalizeString(searchKey.toLowerCase()),
      )
    );
  };
  return (
    <>
      {categories.map((category, id) => (
        <div id={category} key={id} className="scroll-mt-28 p-2 pb-10 pt-4">
          <h3 className="p-4 pt-0 text-xl font-semibold text-color-secondary">
            {category}
          </h3>
          <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3">
            {items
              .filter((item) => searchFilter(item, searchKey))
              .filter((item) => item.category.category === category)
              .map((filteredItems, i) => (
                <Card key={i} item={filteredItems} />
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default CardsWrapper;

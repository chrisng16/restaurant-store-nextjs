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

  const renderCategoryBlock = (category: string) => {
    const filteredItems = items
      .filter((item) => item.category.category === category)
      .filter((item) => searchFilter(item, searchKey));
    if (!filteredItems.length) return null;
    return (
      <div
        id={category}
        className="scroll-mt-16 p-2 pb-10 pt-4 sm:scroll-mt-28"
      >
        <h3 className="p-4 pt-0 text-xl font-semibold text-color-secondary">
          {category}
        </h3>
        <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3">
          {filteredItems.map((filteredItems, i) => (
            <Card key={i} item={filteredItems} />
          ))}
        </div>
      </div>
    );
  };
  return (
    <>
      {categories.map((category, id) => (
        <div key={id}>{renderCategoryBlock(category)}</div>
      ))}
    </>
  );
};

export default CardsWrapper;

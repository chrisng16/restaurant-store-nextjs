"use client";
import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetContent,
  SheetClose,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Icons } from "../Icons";
import useActiveElement from "@/hooks/use-active-element";

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

const CategoriesSideMenu = () => {
  const activeElement = useActiveElement(categories);
  const changeActiveElement = (newActiveElement: string) => {
    console.log(document.getElementById(newActiveElement));
    document.getElementById(newActiveElement)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="justify-center">
          <Icons.Hamburger strokeWidth={2} className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex w-full flex-col gap-1">
        <SheetHeader>
          <SheetTitle>Categories</SheetTitle>
          <SheetDescription className="sr-only">
            Categories List
          </SheetDescription>
        </SheetHeader>
        {categories.map((category, index) => (
          <SheetClose key={index} asChild>
            <button
              className={`cursor-pointer whitespace-nowrap rounded p-1 pl-2 text-start hover:bg-black/5 ${activeElement === category ? "font-medium underline underline-offset-4" : ""}`}
              id={`category${index}`}
              onClick={() => changeActiveElement(category)}
            >
              {category}
            </button>
          </SheetClose>
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default CategoriesSideMenu;

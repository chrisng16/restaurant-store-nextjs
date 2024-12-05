import HorizontalScollArea from "./HorizontalScollArea";
import { getAllItems } from "@/data/item";
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
const CardsView = async () => {
  const items = await getAllItems();
  const foodItems = [...items];
  foodItems.sort((a, b) =>
    Number(a.menuNum.replace(/\D+/g, "")) >
    Number(b.menuNum.replace(/\D+/g, ""))
      ? 1
      : -1,
  );

  return (
    <div className="relative h-auto">
      <div className="sticky top-16 z-10 bg-white px-4">
        <HorizontalScollArea categories={categories} />
      </div>

      <div>
        <CardsWrapper categories={categories} items={foodItems} />
      </div>
    </div>
  );
};

export default CardsView;
export const revalidate = 21600;

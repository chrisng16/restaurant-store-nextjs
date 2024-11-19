import Card from "./Card";
import HorizontalScollArea from "./HorizontalScollArea";
// import { getAllCategories } from "@/data/category";
import { getAllItems } from "@/data/item";

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
        {categories.map((category, id) => (
          <div id={category} key={id} className="scroll-mt-28 p-2 pb-10 pt-4">
            <h3 className="p-4 pt-0 text-xl font-semibold text-color-secondary">
              {category}
            </h3>
            <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3">
              {foodItems
                .filter((item) => item.category.category === category)
                .map((filteredItems, i) => (
                  <Card key={i} item={filteredItems} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsView;
export const revalidate = 21600;

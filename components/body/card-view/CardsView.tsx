import data from "@/lib/data";
import Card from "./Card";
import HorizontalScollArea from "./HorizontalScollArea";

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

const foodItems = [...data];
foodItems.sort((a, b) =>
  Number(a.menuNum.replace(/\D+/g, "")) > Number(b.menuNum.replace(/\D+/g, ""))
    ? 1
    : -1,
);

const CardsView = () => {
  return (
    <div className="relative h-auto w-full">
      <div className="sticky top-16 z-10 w-full bg-white px-4">
        <HorizontalScollArea />
      </div>

      <div>
        {categories.map((category, index) => (
          <div
            id={category}
            key={index}
            className="scroll-mt-28 p-2 pb-10 pt-4"
          >
            <h3 className="p-4 pt-0 text-3xl font-semibold">{category}</h3>
            <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3">
              {foodItems
                .filter((item) => item.category === category)
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

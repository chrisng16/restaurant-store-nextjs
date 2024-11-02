import React from "react";

const HorizontalScollArea = (categories: Array<string>) => {
  return (
    <div className="space-x-2 flex max-w-[calc(100vw-384px)] overflow-x-scroll scrollbar-hide snap-x snap-mandatory">
      {categories.map((category, index) => (
        <a
          className="p-2 bg-slate-300 whitespace-nowrap cursor-pointer snap-start"
          key={index}
        >
          {category}
        </a>
      ))}
    </div>
  );
};

export default HorizontalScollArea;

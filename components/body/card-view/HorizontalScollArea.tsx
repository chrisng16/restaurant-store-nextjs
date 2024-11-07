"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Icons } from "@/components/Icons";

type Props = {
  categories: Array<string>;
  activeElement: string | null;
};
const HorizontalScollArea: React.FC<Props> = ({
  categories,
  activeElement,
}) => {
  const [active, setActive] = useState(activeElement);

  const findActiveElementIndex = useCallback(() => {
    return categories.findIndex((category) => category === active);
  }, [active, categories]);

  useEffect(() => {
    setActive(activeElement);
  }, [activeElement]);

  useEffect(() => {
    const curActiveIndex = findActiveElementIndex();
    document.getElementById(`category${curActiveIndex}`)?.scrollIntoView({
      inline: "start",
      behavior: "smooth",
      block: "nearest",
    });
  }, [active, findActiveElementIndex]);

  const onLeftBtnClicked = () => {
    const curActiveIndex = findActiveElementIndex();

    if (curActiveIndex - 1 >= 0) {
      setActive(categories[curActiveIndex - 1]);
      changeActiveElement(categories[curActiveIndex - 1]);
    }
  };
  const onRighttBtnClicked = () => {
    const curActiveIndex = findActiveElementIndex();
    if (curActiveIndex + 1 <= categories.length - 1) {
      changeActiveElement(categories[curActiveIndex + 1]);
    }
  };
  const changeActiveElement = (newActiveElement: string) => {
    setActive(newActiveElement);
    document.getElementById(newActiveElement)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="relative mx-4 flex h-12 items-center justify-center rounded-full">
      <div className="z-10 bg-gradient-to-l from-[rgba(255,255,255,0)] from-0% to-[rgba(255,255,255,1)] to-50% py-2 pl-0 pr-4">
        <button
          className="size-6 rounded-full hover:bg-gray-300/30"
          onClick={onLeftBtnClicked}
        >
          <Icons.ArrowLeft />
        </button>
      </div>
      <div className="-mx-4 flex h-full w-full max-w-full items-center space-x-2 overflow-x-scroll bg-white scrollbar-hide lg:max-w-[calc(100vw-384px)]">
        {categories.map((category, index) => (
          <span
            className="group cursor-pointer whitespace-nowrap p-2"
            id={`category${index}`}
            onClick={() => {
              changeActiveElement(category);
            }}
            key={index}
          >
            {category}
            <span
              className={`block h-1 max-w-full rounded-full transition-all duration-300 group-hover:bg-black/50 ${active === category ? "bg-black/80" : ""}`}
            ></span>
          </span>
        ))}
      </div>
      <div className="z-10 bg-gradient-to-r from-[rgba(255,255,255,0)] from-0% to-[rgba(255,255,255,1)] to-50% py-2 pl-4 pr-0">
        <button
          className="size-6 rounded-full hover:bg-gray-300/30"
          onClick={onRighttBtnClicked}
        >
          <Icons.ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default HorizontalScollArea;

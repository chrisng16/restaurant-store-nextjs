"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Icons } from "@/components/Icons";
import useActiveElement from "@/hooks/use-active-element";

interface Props {
  categories: string[];
}

const HorizontalScollArea: React.FC<Props> = ({ categories }) => {
  const activeElement = useActiveElement(categories);
  const [active, setActive] = useState(activeElement);

  const findActiveElementIndex = useCallback(() => {
    return categories.findIndex((category) => category === active);
  }, [active, categories]);

  useEffect(() => {
    setActive(activeElement);
  }, [activeElement]);

  useEffect(() => {
    const curActiveIndex = findActiveElementIndex();
    const element = document.getElementById(`category${curActiveIndex}`);
    if (element) {
      element.scrollIntoView({
        inline: "start",
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [active, findActiveElementIndex]);

  const onLeftBtnClicked = () => {
    const curActiveIndex = findActiveElementIndex();
    console.log(curActiveIndex);
    if (curActiveIndex - 1 >= 0) {
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
    console.log(document.getElementById(newActiveElement));
    document.getElementById(newActiveElement)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="relative flex h-12 w-full items-center justify-center">
      <div className="z-10 bg-gradient-to-l from-[rgba(255,255,255,0)] from-0% to-[rgba(255,255,255,1)] to-50% py-2 pl-0 pr-4">
        <button
          className="size-6 rounded-full hover:bg-gray-300/30"
          onClick={onLeftBtnClicked}
        >
          <Icons.ArrowLeft />
        </button>
      </div>
      <div className="-mx-4 flex h-full w-full max-w-full grow snap-x snap-mandatory items-center space-x-2 overflow-x-scroll bg-white scrollbar-hide lg:max-w-[calc(100vw-384px)]">
        {categories.map((category, index) => (
          <span
            className="group cursor-pointer snap-start whitespace-nowrap p-2"
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

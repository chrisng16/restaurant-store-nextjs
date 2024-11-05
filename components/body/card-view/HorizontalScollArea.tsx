"use client";
import React, { useState } from "react";
import { Icons } from "@/components/Icons";

type Props = {
  items: Array<string>;
};
const HorizontalScollArea: React.FC<Props> = ({ items }) => {
  const [active, setActive] = useState("");

  const onLeftBtnClicked = () => {
    const curActiveIndex = items.findIndex((item) => item === active);
    if (curActiveIndex - 1 >= 0) {
      setActive(items[curActiveIndex - 1]);
      location.hash = items[curActiveIndex - 1];
    }
  };
  const onRighttBtnClicked = () => {
    const curActiveIndex = items.findIndex((item) => item === active);
    if (curActiveIndex + 1 <= items.length - 1) {
      setActive(items[curActiveIndex + 1]);
      location.hash = items[curActiveIndex + 1];
    }
  };

  return (
    <div className="mx-4 flex h-12 items-center justify-center rounded-full">
      <div className="z-10 bg-gradient-to-l from-[rgba(255,255,255,0)] from-0% to-[rgba(255,255,255,1)] to-50% py-2 pl-0 pr-4">
        <button
          className="size-6 rounded-full hover:bg-gray-300/30"
          onClick={onLeftBtnClicked}
        >
          <Icons.ArrowLeft />
        </button>
      </div>
      <div className="-mx-4 flex h-full max-w-full snap-x snap-mandatory items-center space-x-2 overflow-x-scroll bg-white scrollbar-hide lg:max-w-[calc(100vw-384px)]">
        {items.map((item, index) => (
          <a
            href={`#${item}`}
            className="group cursor-pointer snap-start whitespace-nowrap p-2"
            onClick={() => setActive(item)}
            key={index}
          >
            {item}
            <span
              className={`block h-1 max-w-full rounded-full transition-all duration-300 group-hover:bg-black/50 ${active === item ? "bg-black/80" : ""}`}
            ></span>
          </a>
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

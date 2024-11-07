"use client";
import React, { useEffect, useState } from "react";
import { Icons } from "@/components/Icons";

type Props = {
  items: Array<string>;
  activeElement: string | null;
};
const HorizontalScollArea: React.FC<Props> = ({ items, activeElement }) => {
  const [active, setActive] = useState(activeElement);
  useEffect(() => {
    setActive(activeElement);
  }, [activeElement]);

  useEffect(() => {
    const curActiveIndex = items.findIndex((item) => item === active);
    document
      .getElementById(`Item${curActiveIndex}`)
      ?.scrollIntoView({ inline: "start", behavior: "smooth" });
  }, [active]);

  const onLeftBtnClicked = () => {
    const curActiveIndex = items.findIndex((item) => item === active);
    if (curActiveIndex - 1 >= 0) {
      setActive(items[curActiveIndex - 1]);
      document
        .getElementById(`Item${curActiveIndex - 1}`)
        ?.scrollIntoView({ inline: "start", behavior: "smooth" });
      location.hash = items[curActiveIndex - 1];
    }
  };
  const onRighttBtnClicked = () => {
    const curActiveIndex = items.findIndex((item) => item === active);
    if (curActiveIndex + 1 <= items.length - 1) {
      setActive(items[curActiveIndex + 1]);
      document
        .getElementById(`Item${curActiveIndex + 1}`)
        ?.scrollIntoView({ inline: "start", behavior: "smooth" });
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
      <div className="-mx-4 flex h-full w-full max-w-full snap-x snap-mandatory items-center space-x-2 overflow-x-scroll bg-white scrollbar-hide lg:max-w-[calc(100vw-384px)]">
        {items.map((item, index) => (
          <a
            href={`#${item}`}
            className="group cursor-pointer snap-start whitespace-nowrap p-2"
            id={`Item${index}`}
            // onClick={() => setActive(item)}
            onClick={() => {
              setActive(item);
              document
                .getElementById(`Item${index}`)
                ?.scrollIntoView({ inline: "start", behavior: "smooth" });
            }}
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

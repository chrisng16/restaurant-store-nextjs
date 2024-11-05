import { Icons } from "@/components/Icons";
import Image from "next/image";
import React from "react";

type CardType = {
  item: {
    name: string;
    desc: string;
    category: string;
    price: number;
    isAvailable: boolean;
    menuNum: string;
    optionsList?: undefined | object;
  };
};

const Card: React.FC<CardType> = ({ item }) => {
  return (
    <div className="group relative z-0 flex h-[7.5rem] justify-between rounded-xl border">
      <div className="m-4 flex grow flex-col justify-center">
        <h2 className="line-clamp-1 text-color-secondary">
          {item.menuNum}. {item.name}
        </h2>
        <p className="line-clamp-2 text-sm leading-4">{item.desc}</p>
        <span className="mt-2 leading-4">${(item.price / 100).toFixed(2)}</span>
      </div>

      <Image
        src={"https://picsum.photos/200"}
        alt={item.name}
        className="size-[7.5rem] rounded-e-xl object-contain"
        width={130}
        height={130}
      />
      <button className="absolute bottom-2 right-2 hidden rounded-full bg-color-main px-4 py-1 text-sm text-color-secondary hover:scale-110 group-hover:block">
        ADD
      </button>
    </div>
  );
};

export default Card;

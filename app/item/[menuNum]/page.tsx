import { getItemByMenuNum } from "@/data/item";
import React from "react";

import ItemDetailsCard from "../_components/ItemDetailsCard";

type Props = {
  params: {
    menuNum: string;
  };
};

const ItemDetailsPage = async ({ params: { menuNum } }: Props) => {
  const item = await getItemByMenuNum(menuNum);

  if (item) {
    return (
      <div className="container mx-auto mt-10 w-full max-w-lg rounded-xl border">
        <ItemDetailsCard item={item} />
      </div>
    );
  }

  return <div>ItemDetailsPage</div>;
};

export default ItemDetailsPage;

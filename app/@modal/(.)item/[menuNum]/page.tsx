import { getItemByMenuNum } from "@/data/item";
import React from "react";
import Modal from "@/components/Modal";
import ItemDetailsCard from "@/app/item/_components/ItemDetailsCard";

type Props = {
  params: {
    menuNum: string;
  };
};

const ItemDetailsPage = async ({ params: { menuNum } }: Props) => {
  const item = await getItemByMenuNum(menuNum);

  if (item) {
    return (
      <Modal title={item.name} desc={item.desc}>
        <ItemDetailsCard item={item} />
      </Modal>
    );
  }

  return <div>Item Not Found</div>;
};

export default ItemDetailsPage;

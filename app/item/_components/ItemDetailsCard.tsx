"use client";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Skeleton } from "@/components/ui/skeleton";
import { Item } from "@/data/item";
import { useCartStore } from "@/store";
import { OptionChoice } from "@prisma/client";
import React, { useState } from "react";
import { calculateCartItem } from "@/actions/item";
import { useRouter } from "next/navigation";

export type ItemDetails = {
  itemName: string;
  menuNum: string;
  qty: number;
  selectedRequiredOption: OptionChoice | null;
  selectedOptionalOptions: OptionChoice[];
  total: number;
};

const ItemDetailsCard = ({ item }: { item: Item }) => {
  const { addCartItem } = useCartStore();
  const router = useRouter();

  // Get the optionList and sort it so that the required options goes first
  const { optionList } = item;
  optionList?.sort((x, y) => Number(x.isOptional) - Number(y.isOptional));

  const defaultItemDetails: ItemDetails = {
    itemName: item.name,
    menuNum: item.menuNum,
    qty: 1,
    selectedRequiredOption: optionList[0]?.options[0] || null,
    selectedOptionalOptions: [],
    total: item.price,
  };

  const [itemDetails, setItemDetails] =
    useState<ItemDetails>(defaultItemDetails);

  const onAddToCartBtnClicked = async () => {
    const combinedOptions = itemDetails.selectedRequiredOption
      ? [
          itemDetails.selectedRequiredOption,
          ...itemDetails.selectedOptionalOptions,
        ]
      : itemDetails.selectedOptionalOptions;

    const calculatedCartItem = await calculateCartItem({
      name: itemDetails.itemName,
      menuNum: itemDetails.menuNum,
      qty: itemDetails.qty,
      options: combinedOptions,
      itemTotal: itemDetails.total,
    });

    addCartItem(calculatedCartItem);
    router.back();
  };

  const renderOptionChoice = (isOptional: boolean, options: OptionChoice[]) => {
    const onOptionChoiceChange = (optionChoice: OptionChoice) => {
      if (itemDetails.selectedOptionalOptions.includes(optionChoice)) {
        setItemDetails((prev) => ({
          ...prev,
          selectedOptionalOptions: prev.selectedOptionalOptions.filter(
            (item) => item.id !== optionChoice.id,
          ),
          total: prev.total - optionChoice.unitPrice,
        }));
      } else
        setItemDetails((prev) => ({
          ...prev,
          selectedOptionalOptions:
            prev.selectedOptionalOptions.concat(optionChoice),
          total: prev.total + optionChoice.unitPrice,
        }));
    };

    if (!isOptional) {
      return (
        <RadioGroup
          className="divide-y divide-opacity-10"
          defaultValue={JSON.stringify(options[0])}
          onValueChange={(value) =>
            setItemDetails((prev) => ({
              ...prev,
              selectedRequiredOption: JSON.parse(value),
            }))
          }
        >
          {options.map((optionChoice, index) => (
            <div key={index} className="flex items-center gap-4 pt-2">
              <RadioGroupItem
                value={JSON.stringify(optionChoice)}
                id={`optionChoice-${optionChoice.id}`}
              />
              <Label htmlFor={`optionChoice-${optionChoice.id}`}>
                {optionChoice.name}
              </Label>
            </div>
          ))}
        </RadioGroup>
      );
    }

    return (
      <div className="divide-y divide-opacity-10">
        {options.map((optionChoice, index) => (
          <div key={index} className="flex items-center gap-4 py-2">
            <Checkbox
              id={`optionChoice-${optionChoice.id}`}
              onCheckedChange={() => onOptionChoiceChange(optionChoice)}
            />
            <Label htmlFor={`optionChoice-${optionChoice.id}`} className="grid">
              <span>{optionChoice.name}</span>
              <span className="text-sm text-muted-foreground">
                + ${(optionChoice.unitPrice / 100).toFixed(2)}
              </span>
            </Label>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Card className="max-w-screen mx-auto flex max-h-[calc(100vh-4rem)] w-full flex-col divide-y border-0 shadow-none">
      <CardHeader className="shrink-0 p-0">
        <Skeleton className="h-56 w-full rounded-b-none" />
        <div className="flex flex-col space-y-1.5 px-6 pb-2 pt-4">
          <CardTitle>
            {item.menuNum}. {item.name}
          </CardTitle>
          <CardDescription>{item.desc}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="shrink space-y-6 overflow-scroll pb-0 pt-4">
        {optionList?.map((option, index) => (
          <div key={index} className="mb-4">
            <div className="grid">
              <Label
                variant={option.isOptional ? "default" : "required"}
                className="font-semibold"
              >
                {option.name}
              </Label>
              <span className="text-xs text-muted-foreground">
                {option.isOptional ? "Optional" : "Required"}
              </span>
            </div>
            <div className="grid">
              {renderOptionChoice(option.isOptional, option.options)}
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex justify-between pt-4">
        <div className="flex gap-2">
          <Button
            variant="secondary"
            disabled={itemDetails.qty <= 1}
            size="icon"
            className="rounded-full text-color-secondary"
            onClick={() =>
              setItemDetails((prev) => ({ ...prev, qty: prev.qty - 1 }))
            }
          >
            <Icons.MinusCircle />
          </Button>
          <Input
            value={itemDetails.qty}
            onChange={(e) =>
              setItemDetails((prev) => ({
                ...prev,
                qty: Number(e.target.value),
              }))
            }
            className="w-12 text-center"
          ></Input>
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full text-color-secondary"
            onClick={() =>
              setItemDetails((prev) => ({ ...prev, qty: prev.qty + 1 }))
            }
          >
            <Icons.PlusCircle />
          </Button>
        </div>
        <Button onClick={onAddToCartBtnClicked}>
          Add to Cart - $
          {((itemDetails.total / 100) * itemDetails.qty).toFixed(2)}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ItemDetailsCard;

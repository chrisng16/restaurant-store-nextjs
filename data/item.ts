import { db } from "@/lib/db";
import { CartItem } from "@/store";
import { Prisma } from "@prisma/client";
import { getOptionChoiceById } from "./optionChoice";


export type Item = Prisma.ItemGetPayload<{ include: { category: true, optionList: { include: { options: true } } } }>

export async function getAllItems(): Promise<Item[]> {
    const items = await db.item.findMany({
        include: {
            category: true, // Include related category details
            optionList: {
                include: {
                    options: true, // Include related OptionChoices for each Option
                },
            },
        },
    });

    return items;
}

export async function getItemByMenuNum(menuNum: string): Promise<Item | null> {
    const item = await db.item.findUnique({
        where: {
            menuNum
        }, include: {
            category: true, // Include related category details
            optionList: {
                include: {
                    options: true, // Include related OptionChoices for each Option
                },
            },
        },
    })

    return item
}

export async function calculateItemTotal(cartItem: CartItem): Promise<CartItem> {
    const { menuNum, qty, options } = cartItem
    const item = await db.item.findUnique({
        where: {
            menuNum
        }, include: {
            category: true, // Include related category details
            optionList: {
                include: {
                    options: true, // Include related OptionChoices for each Option
                },
            },
        },
    })

    let itemTotal = item?.price || 0
    const optionPromises = options?.map(option => getOptionChoiceById(option?.id))
    if (optionPromises) {
        const results = await Promise.all(optionPromises)
        results.forEach(result => itemTotal += result?.unitPrice || 0)
    }

    return { ...cartItem, itemTotal: itemTotal * qty }
}
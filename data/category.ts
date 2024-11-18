import { db } from "@/lib/db";
import { cache } from 'react';

export const getAllCategories = cache(async () => {
    console.log("getAllCategories")
    return await db.category.findMany();
});
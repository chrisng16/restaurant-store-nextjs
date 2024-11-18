import { db } from "@/lib/db";
import { OptionChoice } from "@prisma/client";


export async function getOptionChoiceById(optionChoiceId: number): Promise<OptionChoice | null> {
    const optionChoice = await db.optionChoice.findUnique({ where: { id: optionChoiceId } })
    return optionChoice
}
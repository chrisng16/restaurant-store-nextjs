

import data from "@/lib/data";
import { db } from "@/lib/db";
async function seed() {
    for (const item of data) {
        // Create or connect Category
        const category = await db.category.upsert({
            where: { category: item.category },
            update: {},
            create: { category: item.category },
        });

        // Handle OptionList only if it exists
        const optionsData = item.optionList
            ? await Promise.all(
                item.optionList.map(async (option) => {
                    const optionChoices = await Promise.all(
                        option.options.map(async (choice) => {
                            // Ensure OptionChoice is unique by name
                            return db.optionChoice.upsert({
                                where: { name: choice.name },
                                update: {},
                                create: {
                                    name: choice.name,
                                    unitPrice: choice.unitPrice,
                                },
                            });
                        })
                    );

                    // Create or connect Option
                    return db.option.create({
                        data: {
                            name: option.name,
                            isOptional: option.isOptional,
                            options: {
                                connect: optionChoices.map((choice) => ({
                                    id: choice.id,
                                })),
                            },
                        },
                    });
                })
            )
            : []; // If no optionList, optionsData is an empty array

        // Create Item and connect Options if available
        await db.item.create({
            data: {
                name: item.name,
                desc: item.desc,
                price: item.price,
                isAvailable: item.isAvailable,
                menuNum: item.menuNum,
                category: { connect: { id: category.id } },
                optionList: {
                    connect: optionsData.map((option) => ({ id: option.id })),
                },
            },
        });
    }
}

seed()
    .then(() => console.log('Data seeded successfully'))
    .catch((error) => console.error('Error seeding data:', error))
    .finally(() => db.$disconnect());

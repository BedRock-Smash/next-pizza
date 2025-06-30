import { Ingredient, Product, Variation } from "@prisma/client";

export type ProdctRealition = Product & {
    ingredients: Ingredient[],
    variants:Variation[]
}

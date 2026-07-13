import { Product } from "../types/Product";
import { getGLP1Score } from "./scoring";

export function buildShoppingListCsv(
  products: Product[]
) {
  const headers =
    "Product,Protein,Fiber,Sugar,GLP1 Score";

  const rows = products.map(
    (product) =>
      [
        product.name,
        product.protein,
        product.fiber,
        product.sugar,
        getGLP1Score(product),
      ].join(",")
  );

  return [
    headers,
    ...rows,
  ].join("\n");
}

import { Product } from "../types/Product";

export function buildShoppingListText(
  products: Product[]
) {
  const totalProtein =
    products.reduce(
      (sum, item) =>
        sum + item.protein,
      0
    );

  const totalFiber =
    products.reduce(
      (sum, item) =>
        sum + item.fiber,
      0
    );

  return `
Better Bites Shopping List

${products
  .map(
    (product) =>
      `• ${product.name}`
  )
  .join("\n")}

Total Products: ${
    products.length
  }

Total Protein: ${
    totalProtein
  }g

Total Fiber: ${
    totalFiber
  }g
`;
}

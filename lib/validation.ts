import { Product } from "../types/Product";

export function isValidProduct(
  product: Product
) {
  if (!product.name) {
    return false;
  }

  if (product.calories < 0) {
    return false;
  }

  if (product.protein < 0) {
    return false;
  }

  if (product.fiber < 0) {
    return false;
  }

  return true;
}

export function getWarnings(
  product: Product
) {
  const warnings: string[] = [];

  if (
    product.category === "Produce" &&
    product.protein > 10
  ) {
    warnings.push(
      "Protein value seems unusually high for produce"
    );
  }

  if (
    product.category === "Produce" &&
    product.fiber > 10
  ) {
    warnings.push(
      "Fiber value seems unusually high for produce"
    );
  }

  if (
    product.calories <= 50 &&
    product.protein >= 20
  ) {
    warnings.push(
      "Calories and protein may be inconsistent"
    );
  }

  if (product.protein > 50) {
    warnings.push(
      "Protein value unusually high"
    );
  }

  if (product.fiber > 25) {
    warnings.push(
      "Fiber value unusually high"
    );
  }

  if (product.sugar > 50) {
    warnings.push(
      "Sugar value unusually high"
    );
  }

  return warnings;
}
import { Product } from "../types/Product";

export function getProductExplanation(
  product: Product
) {
  const reasons: string[] = [];

  if (product.protein >= 10) {
    reasons.push(
      "high in protein"
    );
  }

  if (product.fiber >= 6) {
    reasons.push(
      "high in fiber"
    );
  }

  if (product.guidingStars > 0) {
    reasons.push(
      "earned Guiding Stars"
    );
  }

  if (reasons.length === 0) {
    return "General nutrition option.";
  }

  return `Recommended because it is ${reasons.join(
    ", "
  )}.`;
}
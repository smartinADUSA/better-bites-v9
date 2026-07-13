import { Product } from "../types/Product";
import { getGLP1Score } from "./scoring";

export function getRecommendationReason(
  goal: string,
  product: Product
) {
  const reasons: string[] = [];

  if (product.protein >= 10) {
    reasons.push(
      `${product.protein}g protein`
    );
  }

  if (product.fiber >= 6) {
    reasons.push(
      `${product.fiber}g fiber`
    );
  }

  if (product.sugar <= 5) {
    reasons.push(
      `${product.sugar}g sugar`
    );
  }

  if (product.guidingStars > 0) {
    reasons.push(
      `${product.guidingStars} Guiding Stars`
    );
  }

  reasons.push(
    `GLP-1 Score: ${getGLP1Score(
      product
    )}`
  );

  return reasons;
}

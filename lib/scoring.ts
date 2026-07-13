import { Product } from "../types/Product";

export function getProteinScore(
  product: Product
) {
  return product.protein >= 10;
}

export function getFiberScore(
  product: Product
) {
  return product.fiber >= 6;
}

export function getGuidingStarsScore(
  product: Product
) {
  return product.guidingStars > 0;
}

export function getGLP1Score(
  product: Product
) {
  let score = 0;

  if (product.protein >= 10) {
    score += 40;
  }

  if (product.fiber >= 6) {
    score += 30;
  }

  if (product.guidingStars > 0) {
    score += 20;
  }

  if (product.sugar <= 5) {
    score += 10;
  }

  return Math.min(score, 100);
}
  
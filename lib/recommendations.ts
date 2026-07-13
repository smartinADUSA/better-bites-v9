import { Product } from "../types/Product";
import { getGLP1Score } from "./scoring";

export function getBestOverall(
  products: Product[]
) {
  return [...products]
    .sort(
      (a, b) =>
        getGLP1Score(b) -
        getGLP1Score(a)
    )
    .slice(0, 5);
}

export function getBestProtein(
  products: Product[]
) {
  return [...products]
    .filter(
      (product) =>
        product.protein >= 10
    )
    .sort(
      (a, b) =>
        b.protein -
        a.protein
    )
    .slice(0, 5);
}

export function getBestFiber(
  products: Product[]
) {
  return [...products]
    .filter(
      (product) =>
        product.fiber >= 6
    )
    .sort(
      (a, b) =>
        b.fiber -
        a.fiber
    )
    .slice(0, 5);
}

export function getBestGuidingStars(
  products: Product[]
) {
  return [...products]
    .filter(
      (product) =>
        product.guidingStars > 0
    )
    .sort(
      (a, b) =>
        b.guidingStars -
        a.guidingStars
    )
    .slice(0, 5);
}

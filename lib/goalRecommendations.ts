import { Product } from "../types/Product";
import { getGLP1Score } from "./scoring";

export function getGoalProducts(
  goal: string,
  products: Product[]
) {
  switch (goal) {
    case "protein":
      return [...products]
        .sort(
          (a, b) =>
            b.protein -
            a.protein
        )
        .slice(0, 5);

    case "fiber":
      return [...products]
        .sort(
          (a, b) =>
            b.fiber -
            a.fiber
        )
        .slice(0, 5);

    case "sugar":
      return [...products]
        .sort(
          (a, b) =>
            a.sugar -
            b.sugar
        )
        .slice(0, 5);

    case "glp1":
      return [...products]
        .sort(
          (a, b) =>
            getGLP1Score(b) -
            getGLP1Score(a)
        )
        .slice(0, 5);

    default:
      return [...products]
        .sort(
          (a, b) =>
            getGLP1Score(b) -
            getGLP1Score(a)
        )
        .slice(0, 5);
  }
}

import { Product } from "../types/Product";
import RecommendationCard from "./RecommendationCard";
import { getRecommendationReason } from "../lib/recommendationReasons";

type Props = {
  goal: string;
  products: Product[];
};

export default function RecommendationShowcase({
  goal,
  products,
}: Props) {
  return (
    <div
      style={{
        marginBottom: "40px",
      }}
    >
      <h2>
        🎯 Recommended For Your Goal
      </h2>

      {products.map((product) => (
        <RecommendationCard
          key={product.id}
          product={product}
          reason={getRecommendationReason(
            goal,
            product
          )}
        />
      ))}
    </div>
  );
}
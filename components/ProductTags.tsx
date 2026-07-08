import { Product } from "../types/Product";
import { getGLP1Score } from "../lib/scoring";

type Props = {
  product: Product;
};

export default function ProductTags({
  product,
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        flexWrap: "wrap",
        marginTop: "12px",
      }}
    >
      {product.protein >= 10 && (
        <span
          style={{
            background: "#E8F2FF",
            color: "#0054A6",
            padding: "6px 10px",
            borderRadius: "8px",
          }}
        >
          💪 High Protein
        </span>
      )}

      {product.fiber >= 6 && (
        <span
          style={{
            background: "#F3F9EC",
            color: "#4D7C0F",
            padding: "6px 10px",
            borderRadius: "8px",
          }}
        >
          🌾 High Fiber
        </span>
      )}

      {product.guidingStars > 0 && (
        <span
          style={{
            background: "#FFF7D6",
            color: "#A16207",
            padding: "6px 10px",
            borderRadius: "8px",
          }}
        >
          ⭐ Guiding Stars
        </span>
      )}

      {getGLP1Score(product) >= 80 && (
        <span
          style={{
            background: "#DCFCE7",
            color: "#15803D",
            padding: "6px 10px",
            borderRadius: "8px",
          }}
        >
          ✅ GLP-1 Friendly
        </span>
      )}
    </div>
  );
}

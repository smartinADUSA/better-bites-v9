import { Product } from "../types/Product";
import ProductTags from "./ProductTags";
import StoreBadges from "./StoreBadges";
import ProductWarnings from "./ProductWarnings";
import {
  getWarnings,
} from "../lib/validation";

import ScoreBadge from "./ScoreBadge";
import ProductExplanation from "./ProductExplanation";

import {
  getGLP1Score,
} from "../lib/scoring";

import {
  getProductExplanation,
} from "../lib/explanations";

type Props = {
  product: Product;
};

export default function ProductCard({
  product,
}: Props) {
  const warnings =
    getWarnings(product);

    const score =
  getGLP1Score(product);

const explanation =
  getProductExplanation(
    product
  );

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        marginBottom: "12px",
        borderRadius: "12px",
      }}
    >
      <h3>{product.name}</h3>

      <p>
        <strong>Brand:</strong>{" "}
        {product.brand}
      </p>

      <p>
        Calories: {product.calories}
      </p>

      <p>
        Protein: {product.protein}g
      </p>

      <ProductTags
        product={product}
      />
      <ScoreBadge
  score={score}
/>

      <StoreBadges
        stores={product.stores}
      />

      <ProductWarnings
        warnings={warnings}
      />
      <ProductExplanation
  explanation={explanation}
/>

    </div>
  );
}
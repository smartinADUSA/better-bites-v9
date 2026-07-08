import { Product } from "../types/Product";
import ProductTags from "./ProductTags";
import StoreBadges from "./StoreBadges";
import ProductWarnings from "./ProductWarnings";
import {
  getWarnings,
} from "../lib/validation";

type Props = {
  product: Product;
};

export default function ProductCard({
  product,
}: Props) {
  const warnings =
    getWarnings(product);

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

      <StoreBadges
        stores={product.stores}
      />

      <ProductWarnings
        warnings={warnings}
      />
    </div>
  );
}
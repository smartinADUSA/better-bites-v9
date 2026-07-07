import { Product } from "../types/Product";

type Props = {
  product: Product;
};

export default function ProductCard({
  product,
}: Props) {
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
    </div>
  );
}

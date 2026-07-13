import { Product } from "../types/Product";

type Props = {
  products: Product[];
  onRemove: (
    id: string
  ) => void;
  onClear: () => void;
};

export default function ShoppingList({
  products,
  onRemove,
  onClear,
}: Props) {
  return (
    <div
      style={{
        marginBottom: "24px",
        padding: "16px",
        border: "1px solid #ddd",
        borderRadius: "12px",
      }}
    >
      <h2>
        🛒 Shopping List
      </h2>

      {products.length > 0 && (
        <button
          onClick={onClear}
          style={{
            marginBottom: "12px",
          }}
        >
          Clear List
        </button>
      )}

      {products.length === 0 && (
        <p>
          No items added yet.
        </p>
      )}

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            marginBottom: "8px",
          }}
        >
          <span>
            {product.name}
          </span>

          <button
            onClick={() =>
              onRemove(product.id)
            }
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
import { Product } from "../types/Product";

type Props = {
  product: Product;
  reason: string[];
};

export default function RecommendationCard({
  product,
  reason,
}: Props) {
  return (
    <div
      style={{
        border: "2px solid #0054A6",
        borderRadius: "12px",
        padding: "16px",
        marginBottom: "12px",
        background: "#F5F9FF",
      }}
    >
      <h3>{product.name}</h3>

      <p
  style={{
    fontSize: "14px",
    color: "#555",
  }}
>
  Recommended for your goal.
</p>


      <p>{product.brand}</p>

      <div>
        <strong>
          Why Recommended:
        </strong>

        <ul>
          {reason.map(
            (item, index) => (
              <li key={index}>
                {item}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
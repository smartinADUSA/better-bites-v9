import { Product } from "../types/Product";
import ProductCard from "./ProductCard";

type Props = {
  title: string;
  products: Product[];
};

export default function RecommendationSection({
  title,
  products,
}: Props) {
  return (
    <div
      style={{
        marginBottom: "40px",
      }}
    >
      <h2>{title}</h2>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

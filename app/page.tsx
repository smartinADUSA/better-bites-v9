"use client";

import { useState } from "react";

import products from "../data/products-small.json";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import StoreFilter from "../components/StoreFilter";
import NutritionFilters from "../components/NutritionFilters";
import {
  isValidProduct,
} from "../lib/validation";

export default function Home() {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [storeFilter, setStoreFilter] =
  useState("all");

  const [proteinFilter, setProteinFilter] =
  useState(false);

const [fiberFilter, setFiberFilter] =
  useState(false);

const [guidingStarsFilter,
  setGuidingStarsFilter] =
  useState(false);



  const ITEMS_PER_PAGE = 2;
  
 

  const filteredProducts =
  products
    .filter(isValidProduct)
    .filter((item) => {
    const matchesSearch =
      item.name
        .toLowerCase()
        .includes(
          query.toLowerCase()
        );

    const matchesStore =
      storeFilter === "all" ||
      item.stores.includes(
        storeFilter
      );

      const matchesProtein =
  !proteinFilter ||
  item.protein >= 10;

const matchesFiber =
  !fiberFilter ||
  item.fiber >= 6;

const matchesGuidingStars =
  !guidingStarsFilter ||
  item.guidingStars > 0;

  return (
    matchesSearch &&
    matchesStore &&
    matchesProtein &&
    matchesFiber &&
    matchesGuidingStars
  );
  });

  const totalPages = Math.ceil(
    filteredProducts.length / ITEMS_PER_PAGE
  );

  const paginatedProducts =
    filteredProducts.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );

  return (
    <main
      style={{
        padding: "24px",
      }}
    >
      <Header />

<StoreFilter
  storeFilter={storeFilter}
  onChange={(store) => {
    setStoreFilter(store);
    setCurrentPage(1);
  }}
/>

<NutritionFilters
  proteinFilter={proteinFilter}
  fiberFilter={fiberFilter}
  guidingStarsFilter={
    guidingStarsFilter
  }
  onProteinToggle={() => {
    setProteinFilter(
      !proteinFilter
    );
    setCurrentPage(1);
  }}
  onFiberToggle={() => {
    setFiberFilter(
      !fiberFilter
    );
    setCurrentPage(1);
  }}
  onGuidingStarsToggle={() => {
    setGuidingStarsFilter(
      !guidingStarsFilter
    );
    setCurrentPage(1);
  }}
/>


      <SearchBar
        value={query}
        onChange={(value) => {
          setQuery(value);
          setCurrentPage(1);
        }}
      />

      {paginatedProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={() =>
          setCurrentPage(currentPage - 1)
        }
        onNext={() =>
          setCurrentPage(currentPage + 1)
        }
      />
    </main>
  );
}

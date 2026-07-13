"use client";

import {
  buildShoppingListCsv,
} from "../lib/exportShoppingListCsv";

import {
  buildShoppingListText,
} from "../lib/exportShoppingList";

import ShoppingList
  from "../components/ShoppingList";

import {
  getGoalMessage,
} from "../lib/goalMessages";

import ShoppingGoalSelector
  from "../components/ShoppingGoalSelector";

  import RecommendationShowcase
  from "../components/RecommendationShowcase";



  import {
    getGoalProducts,
  } from "../lib/goalRecommendations";

import { useState } from "react";

import products from "../data/products-real-100.json";
import RecommendationSection
  from "../components/RecommendationSection";

import {
  getBestOverall,
  getBestProtein,
  getBestFiber,
  getBestGuidingStars,
} from "../lib/recommendations";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import StoreFilter from "../components/StoreFilter";
import NutritionFilters from "../components/NutritionFilters";

import {
  isValidProduct,
} from "../lib/validation";

import {
  getGLP1Score,
} from "../lib/scoring";


export default function Home() {
  const [query, setQuery] =
    useState("");

  const [currentPage, setCurrentPage] =
    useState(1);

  const [storeFilter, setStoreFilter] =
    useState("all");

  const [proteinFilter, setProteinFilter] =
    useState(false);

  const [fiberFilter, setFiberFilter] =
    useState(false);
    

  const [
    guidingStarsFilter,
    setGuidingStarsFilter,
  ] = useState(false);
 
  const [
    selectedGoal,
    setSelectedGoal,
  ] = useState("weight");
  
  const [shoppingList, setShoppingList] =
  useState([]);

  const ITEMS_PER_PAGE = 20;

function addToShoppingList(
  product: any
) {
  setShoppingList((current) => {
    const exists = current.some(
      (item: any) =>
        item.id === product.id
    );

    if (exists) {
      return current;
    }

    return [...current, product];
  });
}

function removeFromShoppingList(
  id: string
) {
  setShoppingList((current) =>
    current.filter(
      (item: any) =>
        item.id !== id
    )
  );
}

function clearShoppingList() {
  setShoppingList([]);
}

function exportShoppingList() {
  const text =
    buildShoppingListText(
      shoppingList
    );

  const blob = new Blob(
    [text],
    { type: "text/plain" }
  );

  const url =
    URL.createObjectURL(blob);

  const link =
    document.createElement("a");

  link.href = url;

  link.download =
    "better-bites-shopping-list.txt";

  link.click();

  URL.revokeObjectURL(url);
}

function exportShoppingListCsv() {
  const csv =
    buildShoppingListCsv(
      shoppingList
    );

  const blob = new Blob(
    [csv],
    {
      type: "text/csv",
    }
  );

  const url =
    URL.createObjectURL(blob);

  const link =
    document.createElement("a");

  link.href = url;

  link.download =
    "better-bites-shopping-list.csv";

  link.click();

  URL.revokeObjectURL(url);
}

function copyShoppingList() {
  const text =
    buildShoppingListText(
      shoppingList
    );

  navigator.clipboard.writeText(
    text
  );
}


const filteredProducts = products
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
    })
    .sort(
      (a, b) =>
        getGLP1Score(b) -
        getGLP1Score(a)
    );

  const totalPages = Math.ceil(
    filteredProducts.length /
      ITEMS_PER_PAGE
  );

  const paginatedProducts =
  
    filteredProducts.slice(
      (currentPage - 1) *
        ITEMS_PER_PAGE,
      currentPage *
        ITEMS_PER_PAGE
    );

    const recommendedProducts =
    getGoalProducts(
      selectedGoal,
      filteredProducts
    );
    const recommendedIds =
    new Set(
      recommendedProducts.map(
        (product) => product.id
      )
    );
  const catalogProducts =
  paginatedProducts.filter(
    (product) =>
      !recommendedIds.has(
        product.id
      )
  );

  return (
    <main
      style={{
        padding: "24px",
      }}
    >
      <Header />

      <ShoppingList
  products={shoppingList}
  onRemove={
    removeFromShoppingList
  }
  onClear={clearShoppingList}
/>

      <StoreFilter
        storeFilter={storeFilter}
        onChange={(store) => {
          setStoreFilter(store);
          setCurrentPage(1);
        }}
      />

      <NutritionFilters
        proteinFilter={
          proteinFilter
        }
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

<ShoppingGoalSelector
  selectedGoal={
    selectedGoal
  }
  onChange={
    setSelectedGoal
  }
/>
<p
  style={{
    color: "#666",
    marginBottom: "20px",
  }}
>
  {
    getGoalMessage(
      selectedGoal
    )
  }
</p>
      <SearchBar
        value={query}
        onChange={(value) => {
          setQuery(value);
          setCurrentPage(1);
        }}
      />

<p
  style={{
    marginBottom: "8px",
  }}
>
  Total Products Loaded: {products.length}
</p>

<p
  style={{
    marginBottom: "8px",
  }}
>
  Current Store: {storeFilter}
</p>

<div
  style={{
    marginBottom: "16px",
    color: "#0054A6",
  }}
>
  <p
    style={{
      fontWeight: "bold",
    }}
  >
    Shopping List Items: {shoppingList.length}
  </p>

  <p>
    Total Protein:{" "}
    {shoppingList.reduce(
      (sum, item) =>
        sum + item.protein,
      0
    )}
    g
  </p>

  <p>
    Total Fiber:{" "}
    {shoppingList.reduce(
      (sum, item) =>
        sum + item.fiber,
      0
    )}
    g
  </p>
</div>

<p>
  Average GLP-1 Score:{" "}
  {shoppingList.length === 0
    ? 0
    : Math.round(
        shoppingList.reduce(
          (sum, item) =>
            sum +
            getGLP1Score(item),
          0
        ) /
          shoppingList.length
      )}
</p>

<button
  onClick={
    exportShoppingList
  }
  style={{
    padding: "10px 16px",
    background: "#0054A6",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  }}
  
>
  Export Shopping List
</button>

<button
  onClick={copyShoppingList}
  style={{
    marginLeft: "10px",
    padding: "10px 16px",
  }}
>
  Copy Shopping List
</button>

<button
  onClick={
    exportShoppingListCsv
  }
  style={{
    marginLeft: "10px",
    padding: "10px 16px",
  }}
>
  Download CSV
</button>






<RecommendationShowcase
  goal={selectedGoal}
  products={recommendedProducts}
/>
    
<h2>
  All Products
</h2>

{catalogProducts.map(
  (product) => (
    <ProductCard
  key={product.id}
  product={product}
  onAddToList={
    addToShoppingList
  }
/>
  )
)}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={() =>
          setCurrentPage(
            currentPage - 1
          )
        }
        onNext={() =>
          setCurrentPage(
            currentPage + 1
          )
        }
      />
    </main>
  );
}

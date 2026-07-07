type Props = {
    proteinFilter: boolean;
    fiberFilter: boolean;
    guidingStarsFilter: boolean;
  
    onProteinToggle: () => void;
    onFiberToggle: () => void;
    onGuidingStarsToggle: () => void;
  };
  
  export default function NutritionFilters({
    proteinFilter,
    fiberFilter,
    guidingStarsFilter,
    onProteinToggle,
    onFiberToggle,
    onGuidingStarsToggle,
  }: Props) {
    return (
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={onProteinToggle}
          style={{
            padding: "10px 16px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            background: proteinFilter
              ? "#0054A6"
              : "#DDE4EE",
            color: proteinFilter
              ? "white"
              : "#222",
          }}
        >
          💪 High Protein
        </button>
  
        <button
          onClick={onFiberToggle}
          style={{
            padding: "10px 16px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            background: fiberFilter
              ? "#0054A6"
              : "#DDE4EE",
            color: fiberFilter
              ? "white"
              : "#222",
          }}
        >
          🌾 High Fiber
        </button>
  
        <button
          onClick={onGuidingStarsToggle}
          style={{
            padding: "10px 16px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            background: guidingStarsFilter
              ? "#0054A6"
              : "#DDE4EE",
            color: guidingStarsFilter
              ? "white"
              : "#222",
          }}
        >
          ⭐ Guiding Stars
        </button>
      </div>
    );
  }
type Props = {
    storeFilter: string;
    onChange: (store: string) => void;
  };
  
  export default function StoreFilter({
    storeFilter,
    onChange,
  }: Props) {
    const stores = [
      { value: "all", label: "All Stores" },
      { value: "foodlion", label: "Food Lion" },
      { value: "stopshop", label: "Stop & Shop" },
      { value: "hannaford", label: "Hannaford" },
      { value: "giantfood", label: "Giant Food" },
      {
        value: "giantcompany",
        label: "The GIANT Company",
      },
    ];
  
    return (
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        {stores.map((store) => (
          <button
            key={store.value}
            onClick={() =>
              onChange(store.value)
            }
            style={{
              padding: "10px 16px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              background:
                storeFilter === store.value
                  ? "#0054A6"
                  : "#DDE4EE",
              color:
                storeFilter === store.value
                  ? "white"
                  : "#222",
            }}
          >
            {store.label}
          </button>
        ))}
      </div>
    );
  }
  
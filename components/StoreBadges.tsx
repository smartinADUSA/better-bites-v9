type Props = {
    stores: string[];
  };
  
  export default function StoreBadges({
    stores,
  }: Props) {
    const labels: Record<
      string,
      string
    > = {
      foodlion: "🦁 Food Lion",
      stopshop: "🛒 Stop & Shop",
      hannaford: "🍏 Hannaford",
      giantfood: "🏬 Giant Food",
      giantcompany:
        "🏢 The GIANT Company",
    };
  
    return (
      <div
        style={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          marginTop: "10px",
        }}
      >
        {stores.map((store) => (
          <span
            key={store}
            style={{
              background: "#F0F4F8",
              padding: "6px 10px",
              borderRadius: "8px",
              fontSize: "14px",
            }}
          >
            {labels[store]}
          </span>
        ))}
      </div>
    );
  }
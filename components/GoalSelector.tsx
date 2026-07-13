type Props = {
    goal: string;
    onChange: (
      goal: string
    ) => void;
  };
  
  export default function GoalSelector({
    goal,
    onChange,
  }: Props) {
    const goals = [
      {
        value: "overall",
        label: "🏆 Best Overall",
      },
      {
        value: "protein",
        label: "💪 High Protein",
      },
      {
        value: "fiber",
        label: "🌾 High Fiber",
      },
      {
        value: "sugar",
        label: "🍬 Lower Sugar",
      },
      {
        value: "glp1",
        label: "✅ GLP-1 Friendly",
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
        {goals.map((item) => (
          <button
            key={item.value}
            onClick={() =>
              onChange(item.value)
            }
            style={{
              padding: "10px 16px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              background:
                goal === item.value
                  ? "#0054A6"
                  : "#DDE4EE",
              color:
                goal === item.value
                  ? "white"
                  : "#222",
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    );
  }
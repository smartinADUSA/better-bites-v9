type Props = {
    selectedGoal: string;
    onChange: (
      goal: string
    ) => void;
  };
  
  export default function ShoppingGoalSelector({
    selectedGoal,
    onChange,
  }: Props) {
    const goals = [
      {
        value: "weight",
        label: "⚖️ Weight Management",
      },
      {
        value: "protein",
        label: "💪 More Protein",
      },
      {
        value: "fiber",
        label: "🌾 More Fiber",
      },
      {
        value: "sugar",
        label: "🍬 Reduce Sugar",
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
          marginBottom: "24px",
        }}
      >
        {goals.map((goal) => (
          <button
            key={goal.value}
            onClick={() =>
              onChange(goal.value)
            }
            style={{
              padding: "10px 16px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              background:
                selectedGoal ===
                goal.value
                  ? "#0054A6"
                  : "#DDE4EE",
              color:
                selectedGoal ===
                goal.value
                  ? "white"
                  : "#222",
            }}
          >
            {goal.label}
          </button>
        ))}
      </div>
    );
  }
type Props = {
    score: number;
  };
  
  export default function ScoreBadge({
    score,
  }: Props) {
    return (
      <div
        style={{
          background: "#DCFCE7",
          padding: "8px 12px",
          borderRadius: "8px",
          fontWeight: "bold",
          marginTop: "10px",
        }}
      >
        GLP-1 Score: {score}/100
      </div>
    );
  }
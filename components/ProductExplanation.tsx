type Props = {
    explanation: string;
  };
  
  export default function ProductExplanation({
    explanation,
  }: Props) {
    return (
      <p
        style={{
          marginTop: "10px",
          color: "#555",
        }}
      >
        {explanation}
      </p>
    );
  }
  
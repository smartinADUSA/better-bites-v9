type Props = {
  warnings: string[];
};

export default function ProductWarnings({
  warnings,
}: Props) {
  if (warnings.length === 0) {
    return null;
  }

  return (
    <div
      style={{
        marginTop: "10px",
      }}
    >
      {warnings.map(
        (warning, index) => (
          <div
            key={index}
            style={{
              color: "#B45309",
              background: "#FEF3C7",
              padding: "8px",
              borderRadius: "8px",
              marginTop: "4px",
            }}
          >
            ⚠️ {warning}
          </div>
        )
      )}
    </div>
  );
}
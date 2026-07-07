type Props = {
    value: string;
    onChange: (
      value: string
    ) => void;
  };
  
  export default function SearchBar({
    value,
    onChange,
  }: Props) {
    return (
      <input
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder="Search foods..."
        style={{
          padding: "12px",
          width: "100%",
          maxWidth: "500px",
          marginBottom: "24px",
        }}
      />
    );
  }
  
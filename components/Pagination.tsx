type Props = {
    currentPage: number;
    totalPages: number;
    onPrevious: () => void;
    onNext: () => void;
  };
  
  export default function Pagination({
    currentPage,
    totalPages,
    onPrevious,
    onNext,
  }: Props) {
    return (
      <div
        style={{
          display: "flex",
          gap: "12px",
          alignItems: "center",
          marginTop: "24px",
        }}
      >
        <button
          onClick={onPrevious}
          disabled={currentPage === 1}
        >
          Previous
        </button>
  
        <span>
          Page {currentPage} of {totalPages}
        </span>
  
        <button
          onClick={onNext}
          disabled={
            currentPage === totalPages
          }
        >
          Next
        </button>
      </div>
    );
  }
import {
  CaretDoubleLeft,
  CaretDoubleRight,
} from "@phosphor-icons/react/dist/ssr";

const Pagination = (props) => {
  const { page, lastPage, setPage } = props;

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };
  const handlePreviousPage = () => {
    if (page === 1) return;
    setPage((prevState) => prevState - 1);
    scrollTop();
  };
  return (
    <>
      <div className="flex flex-row justify-center items-center gap-4 w-full py-10">
        <button onClick={handlePreviousPage}>
          <CaretDoubleLeft size={32} color="#e0e0e0" />
        </button>
        <p>
          {page} of {lastPage}{" "}
        </p>
        <button onClick={handleNextPage}>
          <CaretDoubleRight size={32} color="#e0e0e0" />
        </button>
      </div>
    </>
  );
};

export default Pagination;

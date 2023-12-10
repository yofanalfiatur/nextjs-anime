import {
  CaretDoubleLeft,
  CaretDoubleRight,
} from "@phosphor-icons/react/dist/ssr";

const Pagination = () => {
  return (
    <>
      <div className="flex flex-row justify-center items-center gap-4 w-full py-10">
        <button>
          <CaretDoubleLeft size={32} color="#e0e0e0" />
        </button>
        <p>1</p>
        <button>
          <CaretDoubleRight size={32} color="#e0e0e0" />
        </button>
      </div>
    </>
  );
};

export default Pagination;

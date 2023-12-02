import Link from "next/link";
import TitlePage from "./TitlePage";
const CardList = (props) => {
  const { children, titlePage, info, id } = props;
  return (
    <>
      <section id={id} className="wrapper container mx-auto w-full py-8">
        <div className="flex flex-row justify-between items-center my-4">
          {titlePage && <TitlePage> {titlePage}</TitlePage>}
          {info && (
            <Link href="#" className="hover:text-sky-400 ">
              {info}
            </Link>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3  lg:grid-cols-5 gap-6">
          {children}
        </div>
      </section>
    </>
  );
};

export default CardList;

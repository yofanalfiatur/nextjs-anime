import TitlePage from "./TitlePage";
const CardList = (props) => {
  const { children, titlePage } = props;
  return (
    <>
      <section className="wrapper container mx-auto w-full">
        <TitlePage> {titlePage}</TitlePage>
        <div className="grid grid-cols-5 gap-6">{children}</div>
      </section>
    </>
  );
};

export default CardList;

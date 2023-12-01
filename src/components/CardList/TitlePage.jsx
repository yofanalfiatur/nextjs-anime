const TitlePage = (props) => {
  const { children } = props;
  return (
    <>
      <h2 className="text-3xl font-bold"> {children}</h2>
    </>
  );
};

export default TitlePage;

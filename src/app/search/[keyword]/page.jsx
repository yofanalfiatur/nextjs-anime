const SearchDetail = ({ params }) => {
  const { keyword } = params;
  return (
    <>
      <p className="">Hasil Pencarian</p>
      <h1>{keyword}</h1>
    </>
  );
};

export default SearchDetail;

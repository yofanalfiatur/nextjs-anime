import CardList from "@/components/CardList";
import CardSingle from "@/components/CardList/CardSingle";

const Search = async ({ params }) => {
  const { keyword } = params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}&limit=10`
  );
  const dataSearch = await response.json();
  return (
    <>
      <CardList titlePage="Top Anime" id="search">
        {dataSearch.data.map((dataSearch) => {
          return (
            <CardSingle
              key={dataSearch.mal_id}
              image={dataSearch.images.jpg.image_url}
              title={dataSearch.title}
              score={dataSearch.score}
            />
          );
        })}
      </CardList>
    </>
  );
};

export default Search;

import { getDataResponse } from "@/libs/api-libs";
import CardList from "@/components/CardList";
import CardSingle from "@/components/CardList/CardSingle";

const Search = async ({ params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURIComponent(keyword);

  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}&limit=10`
  // );
  // const dataSearch = await response.json();
  const dataSearchAnime = await getDataResponse(
    "anime",
    `q=${keyword}&limit=5`
  );
  const dataSearchManga = await getDataResponse(
    "manga",
    `q=${keyword}&limit=5`
  );
  return (
    <>
      <CardList
        titlePage={`Hasil Pencarian Anime : ${decodeKeyword}`}
        id="search-anime"
      >
        {dataSearchAnime.data.map((dataSearchAnime) => {
          return (
            <CardSingle
              key={dataSearchAnime.mal_id}
              href={`/detail/anime/${dataSearchAnime.mal_id}`}
              image={dataSearchAnime.images.jpg.image_url}
              title={dataSearchAnime.title}
              score={dataSearchAnime.score}
            />
          );
        })}
      </CardList>

      <CardList
        titlePage={`Hasil Pencarian Manga : ${decodeKeyword}`}
        id="search-manga"
      >
        {dataSearchManga.data.map((dataSearchManga) => {
          return (
            <CardSingle
              key={dataSearchManga.mal_id}
              href={`/detail/manga/${dataSearchManga.mal_id}`}
              image={dataSearchManga.images.jpg.image_url}
              title={dataSearchManga.title}
              score={dataSearchManga.score}
            />
          );
        })}
      </CardList>
    </>
  );
};

export default Search;

import CardList from "@/components/CardList";
import CardSingle from "@/components/CardList/CardSingle";
import { getDataResponse } from "@/libs/api-libs";

const Home = async () => {
  // const responseAnime = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`
  // );
  // const topAnime = await responseAnime.json();

  const topAnime = await getDataResponse("top/anime", "limit=10");

  const topManga = await getDataResponse("top/manga", "limit=10");

  return (
    <>
      <CardList
        titlePage="Top Anime"
        info="Lihat Semua"
        infoLink="/top-anime"
        id="anime"
      >
        {topAnime.data.map((topAnime) => {
          return (
            <CardSingle
              key={topAnime.mal_id}
              href={`/detail/anime/${topAnime.mal_id}`}
              image={topAnime.images.jpg.image_url}
              title={topAnime.title}
              score={topAnime.score}
            />
          );
        })}
      </CardList>

      <CardList
        titlePage="Top Manga"
        info="Lihat Semua"
        infoLink="/top-manga"
        id="manga"
      >
        {topManga.data.map((topManga) => {
          return (
            <CardSingle
              key={topManga.mal_id}
              href={`/detail/manga/${topManga.mal_id}`}
              image={topManga.images.jpg.image_url}
              title={topManga.title}
              score={topManga.score}
            />
          );
        })}
      </CardList>
    </>
  );
};
export default Home;

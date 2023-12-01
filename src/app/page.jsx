import CardList from "../components/CardList";
import CardSingle from "../components/CardList/CardSingle";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = async () => {
  const responseAnime = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`
  );
  const topAnime = await responseAnime.json();

  const responseManga = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/manga?limit=10`
  );
  const topManga = await responseManga.json();

  return (
    <>
      <Header />
      <main>
        <CardList titlePage="Top Anime" id="anime">
          {topAnime.data.map((topAnime) => {
            return (
              <CardSingle
                key={topAnime.mal_id}
                image={topAnime.images.jpg.image_url}
                title={topAnime.title}
                score={topAnime.score}
              />
            );
          })}
        </CardList>
        <CardList titlePage="Top Manga" id="manga">
          {topManga.data.map((topManga) => {
            return (
              <CardSingle
                key={topManga.mal_id}
                image={topManga.images.jpg.image_url}
                title={topManga.title}
                score={topManga.score}
              />
            );
          })}
        </CardList>
      </main>
      <Footer />
    </>
  );
};
export default Home;

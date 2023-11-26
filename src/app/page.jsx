import CardList from "./components/CardList";
import CardSingle from "./components/CardList/CardSingle";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  );
  const anime = await response.json();
  // console.log(anime);

  return (
    <>
      <Header />
      <main>
        <CardList titlePage="Top Anime">
          {anime.data.map((anime) => {
            return (
              <CardSingle
                key={anime.mal_id}
                image={anime.images.jpg.image_url}
                title={anime.title}
              />
            );
          })}
        </CardList>
        <CardList titlePage="Popular Anime">
          {anime.data.map((anime) => {
            return (
              <CardSingle
                key={anime.mal_id}
                image={anime.images.jpg.image_url}
                title={anime.title}
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

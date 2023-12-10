import CardList from "@/components/CardList";
import CardSingle from "@/components/CardList/CardSingle";

const TopManga = async () => {
  const responseManga = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/manga`
  );

  const topManga = await responseManga.json();

  return (
    <>
      <CardList id="all-top-manga" titlePage="All of Top Manga">
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
    </>
  );
};

export default TopManga;

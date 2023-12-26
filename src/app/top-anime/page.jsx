"use client";
import React, { useEffect, useState } from "react";
import CardList from "@/components/CardList";
import BannerSection from "@/components/BannerSection";
import CardSingle from "@/components/CardList/CardSingle";
import Pagination from "@/components/Utilities/Pagination";
import Loading from "@/components/Loading";

const Anime = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const responseAnime = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
      );
      const data = await responseAnime.json();
      setTopAnime(data);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <BannerSection titleBanner={`All of Top Anime #${page}`} />

      {isLoading ? (
        <Loading />
      ) : (
        <CardList id="all-top-anime">
          {topAnime.data?.map((topAnime) => (
            <CardSingle
              key={topAnime.mal_id}
              image={topAnime.images.jpg.image_url}
              title={topAnime.title}
              score={topAnime.score}
            />
          ))}
        </CardList>
      )}

      <Pagination
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
};

export default Anime;

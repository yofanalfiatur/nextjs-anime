"use client";
import CardList from "@/components/CardList";
import BannerSection from "@/components/BannerSection";
import CardSingle from "@/components/CardList/CardSingle";
import React, { useEffect, useState } from "react";
import Pagination from "@/components/Utilities/Pagination";

const Anime = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const responseAnime = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
    );
    const data = await responseAnime.json();
    setTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <BannerSection titleBanner={`All of Top Anime #${page}`} />
      <CardList id="all-top-anime">
        {topAnime.data?.map((topAnime) => {
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
      <Pagination
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
};

export default Anime;

"use client";
import BannerSection from "@/components/BannerSection";
import CardList from "@/components/CardList";
import CardSingle from "@/components/CardList/CardSingle";
import Pagination from "@/components/Utilities/Pagination";
import React, { useEffect, useState } from "react";

const TopManga = () => {
  const [page, setPage] = useState(1);
  const [topManga, setTopManga] = useState([]);

  const fetchData = async () => {
    const responseManga = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/manga?page=${page}`
    );
    const data = await responseManga.json();
    setTopManga(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <BannerSection titleBanner={`All of Top Manga #${page}`} />

      <CardList id="all-top-manga" titlePage="All of Top Manga">
        {topManga.data?.map((topManga) => {
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
      <Pagination
        page={page}
        lastPage={topManga.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
};

export default TopManga;

"use client";
import BannerSection from "@/components/BannerSection";
import CardList from "@/components/CardList";
import Pagination from "@/components/Utilities/Pagination";
import React, { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import { getDataResponse } from "../../libs/api-libs";
import CardSingle from "@/components/CardList/CardSingle";

const TopManga = () => {
  const [page, setPage] = useState(1);
  const [topManga, setTopManga] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await getDataResponse("top/manga", `page=${page}`);
      setTopManga(data);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <BannerSection titleBanner={`All of Top Manga #${page}`} />
      {isLoading ? (
        <Loading /> // Tampilkan komponen loading saat data masih dimuat
      ) : (
        <CardList id="all-top-manga" titlePage="All of Top Manga">
          {topManga.data?.map((topManga) => {
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
      )}

      <Pagination
        page={page}
        lastPage={topManga.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
};

export default TopManga;

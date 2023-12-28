import {
  getDataResponse,
  getNestedDataResponse,
  reproduce,
} from "@/libs/api-libs";
import ButtonBack from "@/components/Button/ButtonBack";
import Image from "next/image";
import React from "react";
import CardList from "@/components/CardList";
import CardSingle from "@/components/CardList/CardSingle";

const Page = async ({ params: { id } }) => {
  const { data } = await getDataResponse(`manga/${id}`);

  let recommend = await getNestedDataResponse("recommendations/manga", "entry");
  recommend = reproduce(recommend, 5);

  return (
    <>
      <section className="container mx-auto flex flex-col gap-6 justify-center items-center w-full py-20">
        <ButtonBack />
        <h3 className="text-3xl font-bold">Detail Page</h3>
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="flex flex-col w-full md:w-1/2">
            <h1>{data.title}</h1>
            <div>
              <p>{data.synopsis}</p>
            </div>
          </div>
          <div className="flex items-center flex-col w-full md:w-1/2">
            <Image
              width={424}
              height={600}
              src={data.images.jpg.large_image_url}
              alt={data.title}
            />
          </div>
        </div>
      </section>

      <CardList id="recommend-manga" titlePage="Tertarik dengan Manga Ini">
        {recommend.dataRecommend?.map((recommend) => {
          return (
            <CardSingle
              key={recommend.mal_id}
              href={`/detail/manga/${recommend.mal_id}`}
              image={recommend.images.jpg.image_url}
              title={recommend.title}
            />
          );
        })}
      </CardList>
    </>
  );
};

export default Page;

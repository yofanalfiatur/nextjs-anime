import Image from "next/image";
import React from "react";

const Detail = async ({ params: { id } }) => {
  //id ini dari folder [id]
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${id}`
  );
  const { data: detail } = await response.json();
  //diatas ini sama aja kekgini
  //const dataAPI = await response.json();
  //const detail = dataAPI.data

  return (
    <>
      <section className="container mx-auto flex flex-col gap-6 justify-center items-center w-full py-20">
        <h3 className="text-3xl font-bold">Detail Page</h3>
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="flex flex-col w-full md:w-1/2">
            <h1>{detail.title}</h1>
            <div>
              <p>{detail.synopsis}</p>
            </div>
          </div>
          <div className="flex items-center flex-col w-full md:w-1/2">
            <Image
              width={424}
              height={600}
              src={detail.images.jpg.large_image_url}
              alt={detail.title}
            />
            <video src=""></video>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail;

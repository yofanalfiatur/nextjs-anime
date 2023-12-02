import React from "react";
import TitlePage from "../CardList/TitlePage";
import CardLoading from "./CardLoading";

const Loading = () => {
  return (
    <>
      <section id="loading" className="wrapper container mx-auto w-full py-8">
        <div className="flex flex-row justify-between items-center my-4">
          <TitlePage> Loading ... </TitlePage>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3  lg:grid-cols-5 gap-6">
          <CardLoading />
          <CardLoading />
          <CardLoading />
          <CardLoading />
          <CardLoading />
        </div>
      </section>
    </>
  );
};

export default Loading;

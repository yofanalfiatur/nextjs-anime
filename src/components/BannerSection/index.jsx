const BannerSection = (props) => {
  const { titleBanner } = props;
  return (
    <>
      <section className="">
        <div className="w-full">
          <h1>{titleBanner}</h1>
        </div>
      </section>
    </>
  );
};

export default BannerSection;

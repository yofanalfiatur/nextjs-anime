import Image from "next/image";

const CardSingle = (props) => {
  const { image, title } = props;
  return (
    <>
      <div className="card flex flex-col gap-y-1 bg-slate-200 p-4 rounded-md shadow-lg">
        <Image
          src={image}
          alt="card-image"
          width={300}
          height={400}
          priority
          className="aspect-[3/4] object-cover object-center"
        />
        <div>
          <h4 className="card-title ">{title}</h4>
        </div>
      </div>
    </>
  );
};

export default CardSingle;

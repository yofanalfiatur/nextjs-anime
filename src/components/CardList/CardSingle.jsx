import Image from "next/image";
import Link from "next/link";

const CardSingle = (props) => {
  const { image, title, score } = props;
  return (
    <>
      <Link
        href="#"
        className="card flex flex-col gap-y-1 bg-slate-200  rounded-md shadow-lg relative overflow-hidden"
      >
        <Image
          src={image}
          alt="card-image"
          width={300}
          height={400}
          priority
          className="aspect-[3/4] object-cover object-center"
        />
        <div className="p-4 flex flex-col items-center w-full">
          <h4 className="font-bold text-center">{title}</h4>
        </div>
        <div className="absolute top-0 left-0 px-2 pt-2 pb-4 bg-slate-900 bg-opacity-80 flex flex-col items-center gap-1">
          <Image
            src="/score-star.svg"
            alt="star"
            width={20}
            height={20}
            priority
            className=""
          />
          <p className="text-white">{score}</p>
        </div>
      </Link>
    </>
  );
};

export default CardSingle;

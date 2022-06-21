import Image from "next/image";
import {AiFillStar} from "react-icons/ai";
const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <article className="p-4 shadow-md rounded-md hover:rotate-1 duration-150">
      <div className="flex flex-col md:flex-row space-x-2">
        <div>
          <Image className="rounded-md" src={img} width={235} height={150} />
        </div>
        <div className="flex-1">
          <div>
            <p className="opacity-60 text-xs">{location}</p>
            <p className="font-bold text-lg mt-2">{title}</p>
            <p className="opacity-60 text-sm mt-3">{description}</p>
          </div>
          <div className="mt-3 md:mt-10 flex justify-between w-full">
            <p className="opacity-60 text-xs flex items-center"><AiFillStar size={16} color="gold"/> <span className="inline-block ml-1">{star}</span></p>
            <div>
            <p className="font-bold text-lg flex items-center">{price}</p>
            <p className="opacity-60 text-xs flex items-center">{total}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default InfoCard;

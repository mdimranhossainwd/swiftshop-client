import { Image } from "@nextui-org/react";

const Card = ({ product }) => {
  const {
    _id,
    name,
    categoryId,
    price,
    stock,
    description,
    highlights,
    specifications,
    images,
    brand,
    rating,
    warranty,
    returnPolicy,
  } = product || {};

  return (
    <div className="mx-2">
      <div className="border rounded-md ">
        <Image
          isZoomed
          className="transition-transform duration-300 px-3"
          //   width={240}
          alt="NextUI Fruit Image with Zoom"
          src={images[1]}
        />
        <div className="text-center px-4">
          <h3 className="text-md text-[#766B7A] font-bold">{name}</h3>
          <span className="font-medium font-oswald">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;

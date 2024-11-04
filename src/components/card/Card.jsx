import { Image } from "@nextui-org/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const Card = ({ product }) => {
  const {
    _id: specificId,
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

  const axios = useAxios();
  const { user } = useAuth();
  const [quantity, setQuantity] = useState(1);

  const cartAllData = {
    productId: specificId,
    name: name,
    categoryId: categoryId,
    price: price,
    stock: stock,
    description: description,
    highlights: highlights,
    specifications: specifications,
    images: images,
    brand: brand,
    rating: rating,
    warranty: warranty,
    returnPolicy: returnPolicy,
    userName: user?.displayName,
    photoURL: user?.photoURL,
    quantity: quantity,
    email: user?.email,
    status: "Pending",
  };
  // Add To Card Product Functions
  const addProductCart = async () => {
    const { data } = await axios.post("/carts", cartAllData);
    if (data.acknowledged > 0) {
      Swal.fire({
        title: "Added to Cart!",
        text: `${name} has been added to your Cart.`,
        icon: "success",
        timer: 3000, // Auto-close after 3 seconds
        timerProgressBar: true,
      });
    }
  };

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const totalStars = 5;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`full-${i}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 text-yellow-300"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    }

    // Add half star if applicable
    if (hasHalfStar) {
      stars.push(
        <svg
          key="half"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 text-yellow-300"
        >
          <defs>
            <linearGradient id="half-gradient">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <polygon
            fill="url(#half-gradient)"
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
          />
        </svg>
      );
    }

    // Add empty stars
    for (let i = fullStars + (hasHalfStar ? 1 : 0); i < totalStars; i++) {
      stars.push(
        <svg
          key={`empty-${i}`}
          className="w-4 h-4 text-gray-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="mx-2 pt-4">
      <div className="border rounded-md flex flex-col h-full">
        <Image
          isZoomed
          className="transition-transform duration-300 px-3"
          alt={name}
          src={images[1]}
        />
        <div className="flex-grow text-center px-4 py-3 flex flex-col justify-between">
          <Link to={`/product/${specificId}`}>
            <h3 className="text-md hover:text-[#128AED] cursor-pointer text-left text-[#766B7A] font-bold h-6 overflow-hidden whitespace-nowrap text-ellipsis">
              {name}
            </h3>
          </Link>
          <div className="flex mt-[3px] items-center">
            {renderStars(rating)}
            <span className="pl-2 font-semibold text-[#4D3105]">
              ({rating})
            </span>
          </div>
          <span className="font-medium text-left font-oswald mt-[5px]">
            ${price}
          </span>
          <button
            onClick={addProductCart}
            className="bg-[#128AED] hover:bg-black transition-opacity font-semibold mt-4 mb-3 text-white py-2 px-3 rounded-full"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

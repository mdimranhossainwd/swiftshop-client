import { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const ProductContent = ({ productInfo }) => {
  const {
    _id: productId,
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
  } = productInfo || {};

  const [quantity, setQuantity] = useState(1);
  const axios = useAxios();
  const { user } = useAuth();

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  // Add wishlists Product Functions
  const addWishlists = async (id) => {
    const wishlistData = {
      ...productInfo,
      useName: user?.displayName,
      photoURL: user?.photoURL,
      email: user?.email,
      quantity: quantity,
      status: "Pending",
    };

    try {
      const { data } = await axios.post("/orders", wishlistData);
      if (data.acknowledged > 0) {
        Swal.fire({
          title: "Added to Wishlist!",
          text: `${name} has been added to your wishlist.`,
          icon: "success",
          timer: 3000, // Auto-close after 3 seconds
          timerProgressBar: true,
        });
      }
    } catch (err) {
      console.log(err);
    }

    console.log(wishlistData);
  };

  // Add To Card Product Functions
  const addProductCart = async (id) => {
    const cartProductData = {
      ...productInfo,
      useName: user?.displayName,
      photoURL: user?.photoURL,
      email: user?.email,
      quantity: quantity,
    };

    try {
      const { data } = await axios.post("/carts", cartProductData);
      if (data.acknowledged > 0) {
        Swal.fire({
          title: "Added to Cart!",
          text: `${name} has been added to your Cart.`,
          icon: "success",
          timer: 3000, // Auto-close after 3 seconds
          timerProgressBar: true,
        });
      }
    } catch (err) {
      console.log(err);
    }

    console.log(addProductCart);
  };

  //   Custom Rating
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
    <div>
      <div className=" p-4 ml-4">
        <h2 className="text-2xl text-[#128AED] font-bold mb-5">
          WholeHearted Grain Free All Life Stages Duck
        </h2>
        <div className="flex mt-[3px] items-center border-b-1 pb-5">
          {renderStars(rating)}
          <span className="pl-2 font-semibold text-[#4D3105]">
            ({rating}) ||
          </span>
          <p className="ml-4">
            Hurry Up! Only{" "}
            <span className="font-oswald text-[#128AED]">{stock}</span> Left in
            Stock!
          </p>
        </div>
        <p className="text-[#222222] mt-4 text-2xl font-semibold mb-4">
          $ {price}
        </p>
        <div className="text-[#928f8f]">
          {/* <li>Screen Size 10.9 inch</li>
            <li>Operating System iOS 14.0</li>
            <li>Product Length 9.74 inch</li>
             */}
          <li>{highlights[0]}</li>
          <li>{highlights[1]}</li>
          <li>{highlights[2]}</li>
          <li>{highlights[3]}</li>
          <li>{highlights[4]}</li>
        </div>
        <div className="flex items-center space-x-4 my-8">
          {/* Quantity Selector */}
          <div className="flex items-center gap-2 rounded-lg">
            <button
              onClick={decrementQuantity}
              className="px-4 py-1 text-gray-500 border hover:text-gray-700"
            >
              -
            </button>
            <span className="px-4 py-1">{quantity}</span>
            <button
              onClick={incrementQuantity}
              className="px-4 py-1 text-gray-500 border hover:text-gray-700"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={addProductCart}
            className="uppercase font-oswald bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 hover:bg-gradient-to-r hover:from-blue-500 hover:via-blue-400 hover:to-blue-700 text-white px-12 py-3 rounded-full"
          >
            ADD TO CART
          </button>
        </div>
        <div className="p-4 border-t border-gray-200">
          <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
            <button
              onClick={addWishlists}
              className="flex items-center space-x-1 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide w-5 lucide-heart"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              <span>Add wishlist</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide w-5 lucide-share-2"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
              </svg>
              <span>Add compare</span>
            </button>
          </div>

          <div className="mb-4 border-b-1 pb-5">
            <div className="flex text-lg items-center space-x-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide w-5 lucide-shield-alert"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
              </svg>
              <span>{warranty}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 mt-2">
              <i className="fas fa-undo-alt"></i>
              <span>
                <span className="font-semibold text-gray-800">
                  {returnPolicy}
                </span>{" "}
                of purchase. Taxes are non-refundable.
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-lg mb-3 font-bold text-center">
              Guarantee safe & Secure checkout
            </h3>
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSnd-izXIRHcc3UqaqgJpYPzHFdiNUQje8tsH3zqYqCnqBDI0hs" />
          </div>

          {/* <div className="space-y-2 text-gray-700">
            <div className="flex">
              <span className="w-24 font-semibold">Availability:</span>
              <span className="text-green-600 font-semibold">In Stock</span>
            </div>

            <div className="flex">
              <span className="w-24 font-semibold">Resolutions:</span>
              <span className="text-green-600 font-semibold">
                {specifications.resolution}
              </span>
            </div>

            <div className="flex">
              <span className="w-24 font-semibold">Processor:</span>
              <span className=" ">{specifications.processor}</span>
            </div>
            <div className="flex">
              <span className="w-24 font-semibold">Storage:</span>
              <span className=" ">{specifications.storage}</span>
            </div>
            <div className="flex">
              <span className="w-24 font-semibold">Os:</span>
              <span className=" ">{specifications.os}</span>
            </div>

            <div className="flex">
              <span className="w-24 font-semibold">Capability:</span>
              <span className="grid grid-cols-1">
                {specifications.connectivity.join(",")}
              </span>
            </div>

            <div className="flex">
              <span className="w-24 font-semibold">SKU:</span>
              <span>N/A</span>
            </div>
            <div className="flex">
              <span className="w-24 font-semibold">Vendor:</span>
              <span>{brand}</span>
            </div>
            <div className="flex">
              <span className="w-24 font-semibold">Warranty:</span>
              <span>{warranty}</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductContent;

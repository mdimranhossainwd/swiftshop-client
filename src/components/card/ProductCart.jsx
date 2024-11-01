import { NavLink } from "react-router-dom";

const ProductCart = ({ cart }) => {
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
    useName,
    photoURL,
    email,
    quantity,
  } = cart || {};

  return (
    <div>
      <tr>
        <div>
          <td className="flex items-center gap-4">
            <img src={images[0]} className="w-24 h-20 border" alt="" />
            <div className="">
              <h4 className="text-md bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 bg-clip-text text-transparent font-medium">
                {name}
              </h4>
              <span className="p-4 font-semibold">
                ${(price * quantity).toFixed(2)}
              </span>
            </div>
          </td>
        </div>

        <td className="font-medium">
          <button className="px-2 py-1 mx-3 text-lg rounded-md">-</button>
          {quantity}
          <button className="px-2 py-1 mx-3 text-lg rounded-md">+</button>
        </td>
        <td className="font-medium">
          {
            <span className="p-4 font-semibold">
              ${(price * quantity).toFixed(2)}
            </span>
          }
        </td>
        <th>
          <NavLink to={`/dashboard/update/${_id}`}>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-pencil"
              >
                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                <path d="m15 5 4 4" />
              </svg>
            </button>
          </NavLink>
        </th>
      </tr>
    </div>
  );
};

export default ProductCart;

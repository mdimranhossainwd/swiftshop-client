import { useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAxios from "../hooks/useAxios";
import useCart from "../hooks/useCart";
import Modals from "../shared/Modal";

const MyCartPages = () => {
  const [cart, refetch] = useCart();
  const axios = useAxios();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cartItems, setCartItems] = useState(cart);

  // Sync local cart items with the fetched cart data
  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

  // Function to handle deletion of an item
  const handleDelete = async (id) => {
    const { data } = await axios.delete(`/carts/${id}`);
    toast.success("Item deleted successfully");
    refetch();
  };

  // Update quantity and total cost
  const updateQuantity = async (id, change) => {
    const updatedCart = cartItems.map((item) => {
      if (item._id === id) {
        const newQuantity = item.quantity + change;
        return { ...item, quantity: Math.max(newQuantity, 1) }; // Ensure quantity is at least 1
      }
      return item;
    });
    setCartItems(updatedCart);

    // Optionally, update quantity in the backend
    await axios.patch(`/carts/${id}`, {
      quantity: updatedCart.find((item) => item._id === id).quantity,
    });
    refetch();
  };

  // Calculate total cost based on updated cart items
  const totalCost = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto">
      <div className="my-12">
        <h3 className="text-3xl font-semibold font-oswald text-center">
          || Your Cart Page ||
        </h3>
      </div>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center ">
          <img
            src="https://static.vecteezy.com/system/resources/previews/025/343/104/non_2x/empty-folder-no-result-document-file-data-not-found-concept-empty-state-ui-infographic-free-vector.jpg"
            className="w-1/2 md:w-1/3"
          />
          <p className="text-lg font-semibold mt-4 mb-14">
            Your cart is empty!
          </p>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8 p-3">
          {/* Product List Section */}
          <div className="flex-1 bg-white rounded-lg p-6">
            <table className="table w-full">
              <thead className="w-full border-b border-t text-black text-center">
                <tr>
                  <th className="px-4 py-3">Product Name</th>
                  <th className="px-4 py-3">Quantity</th>
                  <th className="px-4 py-3">SubTotal</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody className="w-full py-4 text-center">
                {cartItems.map((item) => (
                  <tr className="py-4 border-b" key={item._id}>
                    <td className="flex items-center gap-4 p-8">
                      <img
                        src={item.images}
                        className="w-24 h-20 border"
                        alt=""
                      />
                      <div>
                        <h4 className="text-md bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 bg-clip-text text-transparent font-medium">
                          {item.name}
                        </h4>
                        <span className="p-4 font-semibold">${item.price}</span>
                      </div>
                    </td>
                    <td className="font-medium">
                      <button
                        className="px-2 py-1 mx-3 text-lg rounded-md"
                        onClick={() => updateQuantity(item._id, -1)}
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        className="px-2 py-1 mx-3 text-lg rounded-md"
                        onClick={() => updateQuantity(item._id, 1)}
                      >
                        +
                      </button>
                    </td>
                    <td className="font-medium">
                      <span className="p-4 font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(item._id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide mt-2 lucide-trash"
                        >
                          <path d="M3 6h18" />
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cart Summary Section */}
          <div className="flex-1 lg:max-w-sm bg-white rounded-lg border p-6 mr-6">
            <div className="bg-blue-100 text-center py-4 rounded-md mb-6">
              <p>
                Congratulations! You've got{" "}
                <span className="font-semibold text-blue-600">
                  Free Shipping!
                </span>
              </p>
            </div>
            <h3 className="text-lg font-semibold mb-4">Cart Totals</h3>
            <div className="space-y-4">
              <div className="flex border-t border-b py-4 justify-between text-lg font-medium">
                <p>Subtotal: ${totalCost.toFixed(2)}</p>
              </div>
              <div className="flex border-t border-b py-4 justify-between text-lg font-medium">
                <p>
                  Order Totals:{" "}
                  <span className="text-[#128AED] font-bold">
                    ${totalCost.toFixed(2)}
                  </span>
                </p>
              </div>
              <div>
                <button className="w-full bg-blue-500 text-white py-3 font-oswald text-lg uppercase rounded-sm mt-4">
                  CheckOut
                </button>
              </div>
            </div>
            <Modals isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCartPages;

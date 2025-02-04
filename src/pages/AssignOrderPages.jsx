import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAxios from "../hooks/useAxios";
import Heading from "../shared/Heading";

const AssignOrderPages = () => {
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState([]);
  const [filter, setFilter] = useState("");
  const axios = useAxios();

  const { data: getPaymentsData, refetch } = useQuery({
    queryKey: ["getPaymentsData", currentPage, itemsPerPage, filter],
    queryFn: async () => {
      const { data } = await axios.get(
        `/payments?pages=${currentPage}&size=${itemsPerPage}&filter=${filter}`
      );
      return data;
    },
  });

  useEffect(() => {
    const getCount = async () => {
      const { data } = await axios.get(`/products-count`);
      setCount(data.count);
    };
    getCount();
  }, []);

  console.log(getPaymentsData);

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map(
    (elements) => elements + 1
  );

  const handlePaginationButton = (value) => {
    setCurrentPage(value);
  };

  // Order status changed to "In progress"

  const handleOrderStatus = async (id, prevStatus, orderStatus) => {
    const { data } = await axios.patch(`/payments/${id}`, {
      orderStatus,
    });
    toast.success(`Order status changed to ${data.currentStatus}`);
    refetch();
  };

  return (
    <>
      <div>
        <Heading heading="All Assign Order Product" />

        <div className="p-4 bg-white">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center">
            {/* Status Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                onChange={(e) => setFilter(e.target.value)}
                value={filter}
                name="orderStatus"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              >
                <option value="">All</option>
                <option value="Delivered">Delivered</option>
                <option value="In progress">In progress</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            {/* Sort By Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Sort By
              </label>
              <select
                name="sortBy"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              >
                <option value="Id">Id</option>
                <option value="ProductID">Product ID</option>
                <option value="Date">Date</option>
              </select>
            </div>

            {/* Sort Order Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Sort Order
              </label>
              <select
                name="sortOrder"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              >
                <option value="SortOrder">Sort Order</option>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
              </select>
            </div>
          </div>
          {/* Search Input */}
          <div className="w-full my-3">
            <label className="block text-sm font-medium text-gray-700">
              Search
            </label>
            <div className="flex gap-4 items-center mt-1">
              <input
                type="text"
                name="search"
                placeholder="Search users"
                className="flex-grow py-2 px-5 border border-gray-300 rounded-l-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              />
              <button className="p-2 w-24 bg-gradient-to-r from-blue-400 via-blue-400 to-blue-600 text-white rounded-r-md font-medium text-[14px]">
                Reset
              </button>
            </div>
          </div>
        </div>

        <div className="px-3 md:px-6">
          <table className="table w-full">
            <thead className="w-full rounded-md text-white bg-gradient-to-r from-blue-400 via-blue-400 to-blue-600 text-center">
              <tr className="text-lg font-pt">
                <th className="py-[10px]">Product ID</th>
                <th className="py-[10px]">Order ID</th>
                <th className="py-[10px]">Customer Name</th>
                <th className="py-[10px]">Address</th>
                <th className="py-[10px]">Delivery Date</th>
                <th className="py-[10px]">Order Status</th>
                <th className="py-[10px]">Actions</th>
              </tr>
            </thead>
            <tbody className="w-full items-center text-center">
              {getPaymentsData?.map((item, index) => (
                <tr key={item._id} className="border-b">
                  <td className="px-4 py-2 flex items-center text-center justify-center text-[12px] font-bold">
                    # P00{index + 1}
                  </td>
                  <td className="px-4 py-2 text-[12px] font-bold">
                    {" "}
                    # ORD00{index + 1}
                  </td>
                  <td className="px-4 py-2 text-sm "> {item?.name}</td>
                  <td className="px-4 py-2 text-sm "> {item?.address}</td>
                  <td className="px-4 py-2 text-sm "> {item?.formattedDate}</td>
                  <td
                    className={`text-xs px-1 my-3 w-24 mx-auto block py-1 font-medium ${
                      item?.orderStatus === "In progress" &&
                      "bg-orange-100/80 text-orange-500 rounded-full"
                    } ${
                      item?.orderStatus === "Delivered" &&
                      "bg-green-100/80 text-green-500 rounded-full"
                    }  `}
                  >
                    {item?.orderStatus}
                  </td>

                  <td className="px-4 py-2 items-center text-center">
                    <button
                      onClick={() =>
                        handleOrderStatus(
                          item?._id,
                          item?.orderStatus,
                          "Delivered"
                        )
                      }
                      disabled={item.orderStatus === "Delivered"}
                      className="disabled:cursor-not-allowed"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-12">
          {/* Previous Button */}
          <button
            disabled={currentPage === 1}
            onClick={() => handlePaginationButton(currentPage - 1)}
            className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white"
          >
            <div className="flex items-center -mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-1 rtl:-scale-x-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>

              <span className="mx-1">previous</span>
            </div>
          </button>
          {/* Numbers */}
          {pages.map((btnNum) => (
            <button
              onClick={() => handlePaginationButton(btnNum)}
              key={btnNum}
              className={`hidden ${
                currentPage === btnNum ? "bg-blue-500 text-white" : ""
              } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline  hover:bg-blue-600 hover:text-white`}
            >
              {btnNum}
            </button>
          ))}

          {/* Next Button */}
          <button
            disabled={currentPage === numberOfPages}
            onClick={() => handlePaginationButton(currentPage + 1)}
            className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-600 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
          >
            <div className="flex items-center -mx-1">
              <span className="mx-1">Next</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-1 rtl:-scale-x-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default AssignOrderPages;

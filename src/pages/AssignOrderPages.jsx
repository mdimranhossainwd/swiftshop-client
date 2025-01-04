import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAxios from "../hooks/useAxios";
import Heading from "../shared/Heading";

const AssignOrderPages = () => {
  const axios = useAxios();

  const getData = async () => {
    const { data } = await axios.get("/payments");
    return data;
  };

  const { data: getPaymentsData, refetch } = useQuery({
    queryKey: "getPaymentsData",
    queryFn: getData,
  });

  console.log(getPaymentsData);

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
                name="status"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              >
                <option value="All">All</option>
                <option value="Delivered">Delivered</option>
                <option value="InProgress">In progress</option>
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
      </div>
    </>
  );
};

export default AssignOrderPages;

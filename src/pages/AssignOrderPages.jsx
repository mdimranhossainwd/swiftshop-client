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
                    P00{index + 1}
                  </td>
                  <td className="px-4 py-2 text-[12px] font-bold">
                    {" "}
                    ORD00{index + 1}
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

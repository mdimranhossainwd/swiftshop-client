import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import Heading from "../shared/Heading";

const TrackOrderPages = () => {
  const axios = useAxios();
  const { user } = useAuth();

  const getData = async () => {
    const { data } = await axios.get(`/payment?email=${user?.email}`);
    return data;
  };

  const { data: getPaymentInfo, refetch } = useQuery({
    queryKey: ["getPaymentInfo"],
    queryFn: getData,
  });

  console.log(getPaymentInfo);
  return (
    <>
      <div>
        <Heading heading="Tracking My Order Products" />
        <div className="px-3 md:px-6">
          <table className="table w-full">
            <thead className="w-full rounded-md text-white bg-gradient-to-r from-blue-400 via-blue-400 to-blue-600 text-center">
              <tr className="text-lg font-pt">
                <th className="py-[10px]">Order ID</th>
                <th className="py-[10px]">Date</th>
                <th className="py-[10px]">Customer</th>
                <th className="py-[10px]">Price</th>
                <th className="py-[10px]">Product Name</th>
                <th className="py-[10px]">Status</th>
              </tr>
            </thead>
            <tbody className="w-full items-center text-center">
              {getPaymentInfo?.map((item, index) => (
                <tr key={item._id} className="border-b">
                  <td className="px-4 py-2 flex items-center text-center justify-center">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 text-sm ">{item?.formattedDate}</td>
                  <td className="px-4 py-2 text-sm ">{item?.name}</td>
                  <td className="px-4 py-2 text-sm ">
                    {" "}
                    ${item?.price.toFixed(2)}
                  </td>
                  <td>
                    {item?.carts
                      ?.map((cartItem) => cartItem?.name)
                      .join(", ")
                      .slice(0, 25)}
                    {item?.carts?.map((cartItem) => cartItem?.name).join(", ")
                      .length > 25
                      ? "..."
                      : ""}
                  </td>
                  <td
                    className={`text-xs px-1 my-3 block py-1 font-medium ${
                      item?.orderStatus === "In progress" &&
                      "bg-red-100/80 text-red-500 rounded-full"
                    }`}
                  >
                    {item?.orderStatus}
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

export default TrackOrderPages;

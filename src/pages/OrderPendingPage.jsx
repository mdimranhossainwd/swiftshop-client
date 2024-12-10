import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import Heading from "../shared/Heading";

const OrderPendingPage = () => {
  const axios = useAxios();

  const getData = async () => {
    const { data } = await axios.get("/pending-product");
    return data;
  };

  const { data: getPendingInfo, refetch } = useQuery({
    queryKey: "getPendingInfo",
    queryFn: getData,
  });

  console.log(getPendingInfo);

  return (
    <>
      <Heading heading="Pending Orders List" />
      <div className="px-3 md:px-6">
        <table className="table w-full">
          <thead className="w-full rounded-md text-white bg-gradient-to-r from-blue-400 via-blue-400 to-blue-600 text-center">
            <tr className="text-lg font-pt">
              <th className="py-[10px]">Serial No</th>
              <th className="py-[10px]">Product ID</th>
              <th className="py-[10px]">Status</th>
              <th className="py-[10px]">Product Name</th>
              <th className="py-[10px]">Price</th>
              <th className="py-[10px]">Date</th>
            </tr>
          </thead>
          <tbody className="w-full items-center text-center">
            {getPendingInfo?.map((item, index) => (
              <tr key={item._id} className="border-b">
                <td className="px-4 py-2 flex items-center text-center justify-center">
                  {index + 1}
                </td>
                <td className="px-4 py-2 text-sm ">{item?.productId}</td>
                <td
                  className={`text-xs px-1 my-3 block py-1 font-medium ${
                    item?.status === "Pending" &&
                    "bg-blue-100/80 text-blue-500 rounded-full"
                  }`}
                >
                  {item?.status}
                </td>
                <td className="px-4 py-2 font-medium text-sm">{item?.name}</td>
                <td className="px-4 py-2">{item?.price}</td>
                <td className="px-4 py-2">{item?.formattedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderPendingPage;

import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import Heading from "../shared/Heading";

const PaymentHistoryPages = () => {
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
        <Heading heading="Payment History" />
        <div className="px-3 md:px-6">
          <table className="table w-full">
            <thead className="w-full rounded-md text-white bg-gradient-to-r from-blue-400 via-blue-400 to-blue-600 text-center">
              <tr className="text-lg font-pt">
                <th className="py-[10px]">Payment TransID</th>
                <th className="py-[10px]">Amount</th>
                <th className="py-[10px]">Date</th>
                <th className="py-[10px]">Address</th>
                <th className="py-[10px]">Status</th>
                <th className="py-[10px]"></th>
              </tr>
            </thead>
            <tbody className="w-full items-center text-center ">
              {getPaymentInfo?.map((item) => (
                <tr key={item._id} className="border-b">
                  <td className="px-4 py-2 flex items-center">
                    {item?.transId}
                  </td>
                  <td className="px-4 py-2 text-sm font-medium">
                    {item?.price}
                  </td>
                  <td className="px-4 py-2 text-sm">{item?.formattedDate}</td>
                  <td className="px-4 py-2 text-sm">{item?.address}</td>
                  <td className="px-4 py-2">{item?.status}</td>
                  <td className="px-4 py-2">
                    <li>Downloaded</li>
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

export default PaymentHistoryPages;

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
              {getPaymentInfo?.map((item, index) => (
                <tr key={item._id} className="border-b">
                  <td className="px-4 py-2 flex justify-between text-center">
                    {index + 1}. {item?.transId}
                  </td>
                  <td className="px-4 py-2 text-sm font-medium">
                    $ {item?.price.toFixed(2)}
                  </td>
                  <td className="px-4 py-2 text-sm font-medium">
                    {item?.formattedDate}
                  </td>
                  <td className="px-4 py-2 text-sm font-medium">
                    {item?.address}
                  </td>
                  <td
                    className={`badge text-sm ${
                      item?.status === "succeeded" &&
                      "bg-emerald-100/90 rounded-full my-3 block px-2 text-emerald-500 -mt-4"
                    }`}
                  >
                    {item?.status}
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-2 text-blue-500 hover:underline cursor-pointer">
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
                        className="lucide lucide-arrow-down-to-line"
                      >
                        <path d="M12 17V3" />
                        <path d="m6 11 6 6 6-6" />
                        <path d="M19 21H5" />
                      </svg>
                      <span className="text-sm font-medium">Download</span>
                    </div>
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

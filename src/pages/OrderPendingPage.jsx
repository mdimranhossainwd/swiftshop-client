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
    </>
  );
};

export default OrderPendingPage;

import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import Heading from "../shared/Heading";

const DeliveryHistoryPages = () => {
  const axios = useAxios();

  const getData = async () => {
    const { data } = await axios.get("/delivered-product");
    return data;
  };

  const { data: deliveryProducts, refetch } = useQuery({
    queryKey: ["deliveryProducts"],
    queryFn: getData,
  });

  console.log(deliveryProducts);

  return (
    <>
      <Heading heading="Completed All Delivery Products" />
    </>
  );
};

export default DeliveryHistoryPages;

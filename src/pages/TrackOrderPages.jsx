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
      </div>
    </>
  );
};

export default TrackOrderPages;

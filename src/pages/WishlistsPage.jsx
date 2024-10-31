import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";

const WishlistsPage = () => {
  const axios = useAxios();

  const getData = async () => {
    const { data } = await axios.get("/orders");
    return data;
  };

  const { data: getWishlist, refetch } = useQuery({
    queryKey: ["getWishlist"],
    queryFn: getData,
  });
  console.log(getWishlist);

  return <div></div>;
};

export default WishlistsPage;

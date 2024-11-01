import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";
const useCart = () => {
  const { user } = useAuth();
  const axios = useAxios();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const { data } = await axios.get(`/carts?email=${user?.email}`);
      return data;
    },
  });
  return [cart, refetch];
};

export default useCart;

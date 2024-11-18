import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
const AllUsersPages = () => {
  const axios = useAxios();

  const getAllUsers = async () => {
    const { data } = await axios.get("/users");
    return data;
  };

  const { data: getUserInfo, refetch } = useQuery({
    queryKey: ["getUserInfo"],
    queryFn: getAllUsers,
  });

  console.log(getUserInfo);

  return (
    <>
      <h1>All User's:- </h1>
    </>
  );
};

export default AllUsersPages;

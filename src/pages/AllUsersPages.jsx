import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import Heading from "../shared/Heading";
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
      <div>
        <Heading heading="All Users Overview" />
        {/* <div className="px-3 md:px-6">
          <table className="table w-full">
            <thead className="w-full rounded-md text-white bg-gradient-to-r from-blue-400 via-blue-400 to-blue-600 text-center">
              <tr className="text-lg font-pt">
                <th className="py-[10px]">Img</th>
                <th className="py-[10px]">Name</th>
                <th className="py-[10px]">Email</th>
                <th className="py-[10px]">Role</th>
                <th className="py-[10px]">Actions</th>
              </tr>
            </thead>
            <tbody className="w-full items-center font-semibold text-center ">
              {getUserInfo?.map((item) => (
                <tr key={item._id}>
                  <td className="px-4 py-2 flex items-center">
                    <img
                      src={item?.photo}
                      alt="avatar"
                      className="w-8 h-8 mx-auto rounded-full mr-2"
                    />
                  </td>
                  <td className="px-4 py-2">{item?.name}</td>
                  <td className="px-4 py-2">{item?.email}</td>
                  <td className="px-4 py-2">
                    <button className=" w-2/3 text-black font-semibold rounded px-4 py-1">
                      {item?.role}
                    </button>
                  </td>
                  <td className="px-4 py-2">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-user-x"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <line x1="17" x2="22" y1="8" y2="13" />
                        <line x1="22" x2="17" y1="8" y2="13" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      </div>
    </>
  );
};

export default AllUsersPages;

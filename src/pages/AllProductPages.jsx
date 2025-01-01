import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import Heading from "../shared/Heading";

const AllProductPages = () => {
  const axios = useAxios();

  const getAllOrdersData = async () => {
    const { data } = await axios.get("/add-products");
    return data;
  };

  const { data: getOderInfo, refetch } = useQuery({
    queryKey: ["getOderInfo"],
    queryFn: getAllOrdersData,
  });

  console.log(getOderInfo);

  return (
    <>
      <div>
        <Heading heading="All Products Manage" />
        <section className="container px-4 mx-auto">
          <h2 className="text-lg font-medium pl-2 mt-14 text-gray-800 dark:text-white">
            Total Product __ <span>{getOderInfo?.length}</span>
          </h2>

          <div className="flex flex-col mt-2">
            <div className=" overflow-x-auto">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-2">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gradient-to-r from-blue-400 via-blue-400 to-blue-600 text-white">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-md font-medium text-white dark:text-gray-400"
                        >
                          #
                        </th>

                        <th
                          scope="col"
                          className="px-12 py-3.5 text-md font-medium text-center text-white dark:text-gray-400"
                        >
                          Image
                        </th>

                        <th
                          scope="col"
                          className="px-12 py-3.5 text-md font-medium text-center text-white dark:text-gray-400"
                        >
                          Product Name
                        </th>

                        <th
                          scope="col"
                          className="px-12 py-3.5 text-md font-medium text-center text-white dark:text-gray-400"
                        >
                          Price
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-md font-medium text-center rtl:text-right text-white dark:text-gray-400"
                        >
                          Category
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-md font-medium text-center text-white dark:text-gray-400"
                        >
                          Stock
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-md font-medium text-center text-white dark:text-gray-400"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    {getOderInfo?.map((item, index) => (
                      <>
                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                          <tr>
                            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                              {index + 1}
                            </td>
                            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                              <img
                                src={item?.images?.[0]}
                                className="w-14 h-10 mx-auto object-cover rounded-lg"
                                alt=""
                              />
                            </td>
                            <td className="px-12 py-4 text-center text-sm font-medium whitespace-nowrap">
                              <div className="inline px-3 py-1 text-md text-blue-400 rounded-full gap-x-2 font-semibold dark:bg-gray-800">
                                {item?.name}
                              </div>
                            </td>
                            <td className="px-4 py-4 text-center text-sm whitespace-nowrap">
                              <div>
                                <h4 className="text-gray-700 font-medium dark:text-gray-200">
                                  {item?.price}
                                </h4>
                              </div>
                            </td>

                            <td className="px-4 py-4 font-semibold text-center text-sm whitespace-nowrap">
                              {item?.categoryId}
                            </td>
                            <td className="px-4 py-4 text-center text-sm whitespace-nowrap">
                              <div>
                                <p className="bg-gradient-to-r font-bold from-blue-700 via-blue-400 to-blue-500 bg-clip-text text-transparent underline dark:text-gray-200">
                                  {item?.stock}
                                </p>
                              </div>
                            </td>

                            <td className="px-4 text-center py-4 text-sm whitespace-nowrap">
                              <Link
                                to={`/dashboard/edit-product/${item?._id}`}
                                className="text-black-400 dark:text-blue-400"
                              >
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
                                    className="lucide lucide-pencil"
                                  >
                                    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                                    <path d="m15 5 4 4" />
                                  </svg>
                                </button>
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AllProductPages;

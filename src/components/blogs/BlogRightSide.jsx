import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import BlogCard from "../card/BlogCard";

const BlogRightSide = () => {
  const axios = useAxios();
  const getData = async () => {
    const { data } = await axios.get("/blogs");
    return data;
  };

  const { data: getBlogsData, refetch } = useQuery({
    queryKey: "getBlogsData",
    queryFn: getData,
  });
  console.log(getBlogsData);

  return (
    <section>
      <div className="rounded-lg p-4 bg-white transition duration-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3">
          {getBlogsData?.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogRightSide;

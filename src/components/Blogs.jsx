import { useQuery } from "@tanstack/react-query";
import Carousel from "react-multi-carousel";
import useAxios from "../hooks/useAxios";
import BlogCard from "./card/BlogCard";
import Heading from "./shared/Heading";

const Blogs = () => {
  const axios = useAxios();

  //   Get Blogs Data
  const getBlogs = async () => {
    const { data } = await axios.get("/blogs");
    return data;
  };

  const { data: getData } = useQuery({
    queryKey: ["getData"],
    queryFn: getBlogs,
  });
  console.log(getData);

  //   Carousel Functions
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 2520, min: 1920 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="mt-20 mb-14 container mx-auto">
      <Heading heading="From Our Blogs" />

      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2500}
        keyBoardControl={true}
        infinite={true}
      >
        {getData?.length > 0 ? (
          getData?.map((item) => <BlogCard key={item?._id} blog={item} />)
        ) : (
          <div className="flex items-center"></div>
        )}
      </Carousel>
    </div>
  );
};

export default Blogs;

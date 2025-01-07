import BlogLeftSide from "../components/blogs/BlogLeftSide";
import BlogRightSide from "../components/blogs/BlogRightSide";
import Heading from "../components/shared/Heading";

const BlogsPages = () => {
  return (
    <>
      <Heading heading="All Blogs Here" />
      <div className="flex flex-wrap lg:flex-nowrap container mx-auto px-4 gap-6 py-8">
        <BlogLeftSide />
        <BlogRightSide />
      </div>
    </>
  );
};

export default BlogsPages;

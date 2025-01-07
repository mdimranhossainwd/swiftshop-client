import BlogLeftSide from "../components/blogs/BlogLeftSide";
import BlogRightSide from "../components/blogs/BlogRightSide";
import Heading from "../components/shared/Heading";

const BlogsPages = () => {
  return (
    <>
      <div className="my-8">
        <Heading heading="All Blogs Here" />
        <br />
        <div className="flex flex-wrap lg:flex-nowrap container mx-auto px-4 gap-6 py-8">
          <BlogLeftSide />
          <BlogRightSide />
        </div>
      </div>
    </>
  );
};

export default BlogsPages;

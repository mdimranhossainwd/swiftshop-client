import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { _id, title, author, date, content, imageUrl, tags, category } =
    blog || {};

  return (
    <div className="mx-3 mt-8">
      <img
        className="w-full h-52 rounded-md object-cover"
        src={imageUrl}
        alt=""
      />
      <div className="space-y-3">
        <div className="my-3">
          <span className="text-gray-800 px-2 border rounded-full">
            {tags[0]}
          </span>
        </div>
        <Link to={`/blogs/${_id}`}>
          <h2 className="text-xl mb-2 hover:text-[#128AED] font-bold overflow-hidden text-ellipsis whitespace-nowrap">
            {title}
          </h2>
        </Link>
        <div className="flex text-[#2F4A66] mb-4 gap-4 text-sm font-medium">
          <span>{date}</span> ||
          <span>{author}</span>
        </div>
        <Link
          to={`/blogs/${_id}`}
          className="text-blue-500 text-[13px] underline cursor-pointer"
        >
          {" "}
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

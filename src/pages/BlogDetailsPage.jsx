import { useLoaderData } from "react-router-dom";

const BlogDetailsPage = () => {
  const blogData = useLoaderData();
  const { _id, title, author, date, content, imageUrl, tags, category } =
    blogData || {};

  return (
    <div className="container mx-auto mt-8">
      <div className="w-2/3 mx-auto text-center">
        <h2 className="text-5xl font-bold">{title}</h2>
        <div className="text-[#2F4A66] flex items-center justify-center py-6 text-center mb-4 gap-4 text-sm font-medium">
          <span>{date}</span> ||
          <span>{author}</span>
        </div>
      </div>
      <img
        src={imageUrl}
        className="w-full h-[400px] object-cover mb-8"
        alt=""
      />
      <div className="space-y-2 w-8/12 mx-auto my-8">
        <p className="text-lg font-semibold border-b-1 py-3 text-center">
          Descriptions
        </p>
        <p className="text-md text-center">{content} </p>
      </div>
      <div className="flex w-8/12 mx-auto items-center justify-between my-12 gap-4">
        <div className="flex">
          <span className="text-lg">Tags - </span>
          <div className="flex gap-2">
            <span className="border px-3 font-medium rounded-full">
              {tags[0]}
            </span>
            <span className="border px-3 font-medium rounded-full">
              {tags[1]}
            </span>
            <span className="border px-3 font-medium rounded-full">
              {tags[2]}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
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
            className="lucide hover:text-[#128AED] cursor-pointer lucide-facebook"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
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
            className="lucide hover:text-[#128AED] cursor-pointer lucide-twitter"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
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
            className="lucide hover:text-[#128AED] cursor-pointer lucide-linkedin"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;

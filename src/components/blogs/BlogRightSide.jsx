const BlogRightSide = () => {
  return (
    <section className="w-full lg:w-3/4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div className="border border-gray-300 rounded-lg p-4 bg-white shadow hover:shadow-md transition duration-200">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Blog Post"
          className="rounded-md mb-4"
        />
        <span className="bg-blue-500 text-white px-2 py-1 text-xs rounded-full mb-2 inline-block">
          FURNITURE
        </span>
        <h3 className="font-bold text-lg mb-2">
          3 Ways of Lying to Yourself About Your New Relationship.
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          iPad Pro is the fastest device of its kind. It’s designed to take full
          advantage of next-level performance...
        </p>
        <div className="text-sm text-gray-500">
          <span>POST BY ALO SUPPORT</span> • <span>DEC, 14 2023</span>
        </div>
      </div>
    </section>
  );
};

export default BlogRightSide;

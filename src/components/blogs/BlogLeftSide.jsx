const BlogLeftSide = () => {
  return (
    <>
      <aside className="w-full lg:w-1/4 border p-6 rounded-lg mb-6 lg:mb-0">
        {/* Search Blog */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2 border-b py-2">
            Search Blog
          </h2>
          <input
            type="text"
            placeholder="Search blog"
            className="w-full mt-3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Social Links */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2 border-b py-2">Social</h2>
          <div className="flex gap-3">
            <button className="bg-blue-500 text-white px-3 py-1 rounded-full">
              T
            </button>
            <button className="bg-red-500 text-white px-3 py-1 rounded-full">
              P
            </button>
            <button className="bg-pink-500 text-white px-3 py-1 rounded-full">
              I
            </button>
            <button className="bg-blue-400 text-white px-3 py-1 rounded-full">
              F
            </button>
            <button className="bg-yellow-400 text-white px-3 py-1 rounded-full">
              S
            </button>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-lg font-semibold mb-2  border-b py-2">
            Categories
          </h2>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>Technology</span> <span>(06)</span>
            </li>
            <li className="flex justify-between">
              <span>Furniture</span> <span>(10)</span>
            </li>
            <li className="flex justify-between">
              <span>Makeup</span> <span>(06)</span>
            </li>
            <li className="flex justify-between">
              <span>Tools</span> <span>(04)</span>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default BlogLeftSide;

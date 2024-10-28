const TabContent = ({ productInfo }) => {
  const {
    _id,
    name,
    categoryId,
    price,
    stock,
    description,
    highlights,
    specifications = {},
    images,
    brand,
    rating,
    warranty,
    returnPolicy,
  } = productInfo || {};

  return (
    <div className=" p-4 rounded-md">
      <div className="grid grid-cols-1 gap-y-2 gap-x-4 text-gray-700">
        <div className="flex bg-[#F1F5F6] py-3 px-6">
          <span className="w-36 font-semibold text-left">Color</span>
          <span className="text-[#7A7A7A] font-semibold">
            {specifications.color || "Space Black, Silver, Red"}
          </span>
        </div>
        <div className="flex py-3 px-6">
          <span className="w-36 font-semibold text-left">Product Type</span>
          <span className="text-[#7A7A7A] font-semibold">
            {specifications.productType || "New, Renewed, Refurbished, Used"}
          </span>
        </div>
        <div className="flex bg-[#F1F5F6] py-3 px-6">
          <span className="w-36 font-semibold text-left">Storage</span>
          <span className="text-[#7A7A7A] font-semibold">
            {specifications.storage || "64GB, 512GB, 2TB"}
          </span>
        </div>
        <div className="flex py-3 px-6">
          <span className="w-36 font-semibold text-left">Brand</span>
          <span className="text-[#7A7A7A] font-semibold">
            {brand || "Apple"}
          </span>
        </div>
        <div className="flex bg-[#F1F5F6] py-3 px-6">
          <span className="w-36 font-semibold text-left">Display</span>
          <span className="text-[#7A7A7A] font-semibold">
            {specifications.display ||
              "10.9-inch Liquid Retina display with True Tone"}
          </span>
        </div>
        <div className="flex py-3 px-6">
          <span className="w-36 font-semibold text-left">Capacity</span>
          <span className="text-[#7A7A7A] font-semibold">
            {specifications.capacity || "128GB, 256GB, 512GB"}
          </span>
        </div>
        <div className="flex bg-[#F1F5F6] py-3 px-6">
          <span className="w-36 font-semibold text-left">Chip (CPU)</span>
          <span className="text-[#7A7A7A] font-semibold">
            {specifications.chip || "Apple M1 with 8-core CPU, 8-core GPU"}
          </span>
        </div>
        <div className="flex py-3 px-6">
          <span className="w-36 font-semibold text-left">Camera and Video</span>
          <span className="text-[#7A7A7A] font-semibold">
            {specifications.camera || "12MP – 4K Video"}
          </span>
        </div>
        <div className="flex bg-[#F1F5F6] py-3 px-6">
          <span className="w-36 font-semibold text-left">Front Camera</span>
          <span className="text-[#7A7A7A] font-semibold">
            {specifications.frontCamera ||
              "12MP Ultra Wide front camera with Center Stage and Smart HDR 3"}
          </span>
        </div>
        <div className="flex py-3 px-6">
          <span className="w-36 font-semibold text-left">Battery Life</span>
          <span className="text-[#7A7A7A] font-semibold">
            {specifications.battery ||
              "Up to 10 hours on Wi-Fi, Up to 9 hours using cellular data network"}
          </span>
        </div>
        <div className="flex bg-[#F1F5F6] py-3 px-6">
          <span className="w-36 font-semibold text-left">Warranty</span>
          <span className="text-[#7A7A7A] font-semibold">
            {warranty ||
              "12MP Ultra Wide front camera with Center Stage and Smart HDR 3"}
          </span>
        </div>
        <div className="flex py-3 px-6">
          <span className="w-36 font-semibold text-left">OS</span>
          <span className="text-[#7A7A7A] font-semibold">
            {specifications.os || "OS"}
          </span>
        </div>
        <div className="flex bg-[#F1F5F6] py-3 px-6">
          <span className="w-36 font-semibold text-left">Connectivity</span>
          <span className="text-[#7A7A7A] font-semibold">
            {specifications.connectivity.join(",") ||
              "12MP Ultra Wide front camera with Center Stage and Smart HDR 3"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TabContent;

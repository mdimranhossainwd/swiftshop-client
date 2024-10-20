const PromoSections = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4">
        {/* Left Section (Image) - 8 columns */}
        <div
          style={{
            backgroundImage: `url("https://demo-morata.myshopify.com/cdn/shop/files/3_3.png?v=1700467765&width=1500")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="md:col-span-8 px-6 py-8"
        >
          <h2 className="text-2xl font-semibold mb-2 ">
            Battery Charger & Jump Starters
          </h2>
          <p>Charades, Trivial pursuit, Hopscotch and More...</p>
          <span className="font-medium underline mt-6 block">Discover Now</span>
        </div>

        {/* Right Section (Content) - 4 columns */}
        <div
          style={{
            backgroundImage: `url("https://demo-morata.myshopify.com/cdn/shop/files/3_4.png?v=1700467765&width=1500")`,
          }}
          className="md:col-span-4 bg-blue-500 p-6 rounded-md shadow-md text-white"
        >
          <h2 className="text-xl font-semibold mb-2">Electronic Deals</h2>
          <p className="text-white mb-4">
            Laptop, Computer, Audio, Video Game Downloads and More...
          </p>
          <a href="#" className="text-white font-medium underline">
            Discover Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromoSections;

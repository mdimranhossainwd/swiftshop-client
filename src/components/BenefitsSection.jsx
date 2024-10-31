const BenefitsSection = () => {
  return (
    <div className="container mx-auto my-16">
      <div className="flex flex-col md:flex-row space-y-6 lg:space-y-0 justify-between items-center bg-white border border-gray-200 p-6">
        <div className="flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide text-[#7a7e81] lucide-rocket"
          >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
          </svg>
          <div>
            <h4 className="text-lg font-medium">Free Shipping</h4>
            <p className="text-sm text-gray-500">Free Shipping On All Orders</p>
          </div>
        </div>
        <div className="hidden md:block border-r border-gray-300 h-8 mx-4"></div>{" "}
        {/* Divider */}
        <div className="flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide text-[#7a7e81] lucide-refresh-ccw"
          >
            <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
            <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
            <path d="M16 16h5v5" />
          </svg>
          <div>
            <h4 className="text-lg font-medium">Money Guarantee</h4>
            <p className="text-sm text-gray-500">30 Day Money Back Guarantee</p>
          </div>
        </div>
        <div className="hidden md:block border-r border-gray-300 h-8 mx-4"></div>{" "}
        {/* Divider */}
        <div className="flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide text-[#7a7e81] lucide-headset"
          >
            <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
            <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
          </svg>
          <div>
            <h4 className="text-lg font-medium">Online Support 24/7</h4>
            <p className="text-sm text-gray-500">Technical Support 24/7</p>
          </div>
        </div>
        <div className="hidden md:block border-r border-gray-300 h-8 mx-4"></div>{" "}
        {/* Divider */}
        <div className="flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide text-[#7a7e81] lucide-keyboard-music"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="M6 8h4" />
            <path d="M14 8h.01" />
            <path d="M18 8h.01" />
            <path d="M2 12h20" />
            <path d="M6 12v4" />
            <path d="M10 12v4" />
            <path d="M14 12v4" />
            <path d="M18 12v4" />
          </svg>
          <div>
            <h4 className="text-lg font-medium">Member Discount</h4>
            <p className="text-sm text-gray-500">
              Up to 40% Discount on All Products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;

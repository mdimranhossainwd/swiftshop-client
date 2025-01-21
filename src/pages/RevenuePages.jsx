import Heading from "../shared/Heading";

const RevenuePages = () => {
  return (
    <>
      <Heading heading="Revenue Analytics " />
      <div className="container mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="bg-blue-500 rounded-lg p-10 text-white">
            <span className="font-bold text-3xl">1000</span>
            <h3 className="text-xl font-semibold ">Total Revenue</h3>
          </div>
          <div className="bg-green-500 rounded-lg p-10 text-white">
            <span className="font-bold text-3xl">1000</span>

            <h3 className="text-xl font-semibold ">Total Client</h3>
          </div>
          <div className="bg-orange-500 rounded-lg p-10 text-white">
            <span className="font-bold text-3xl">1000</span>

            <h3 className="text-xl font-semibold ">Total Order</h3>
          </div>
          <div className="bg-purple-500 rounded-lg p-10 text-white">
            <span className="font-bold text-3xl">1000</span>

            <h3 className="text-xl font-semibold ">Total Customer</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default RevenuePages;

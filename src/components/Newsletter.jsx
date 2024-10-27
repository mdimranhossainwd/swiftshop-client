const Newsletter = () => {
  return (
    <div className="bg-[#2C2C2C] py-20 my-5">
      <div className="text-white text-center font-oswald text-4xl">
        <h2>Subscribe To Our Newsletter</h2>
      </div>
      <div className="text-center pt-8">
        <input
          className="py-3 px-8 rounded-full w-1/3"
          type="text"
          placeholder="Type Here Your Email Address Here..."
        />
        <button className="text-white font-semibold ml-3 bg-[#128AED] py-3 px-10  rounded-full">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;

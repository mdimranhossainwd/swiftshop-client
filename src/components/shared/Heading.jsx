const Heading = ({ heading }) => {
  return (
    <div className="container mx-auto">
      <h2 className="uppercase font-bold text-3xl text-[#6B5E61] text-center">
        {heading}
      </h2>
    </div>
  );
};

export default Heading;

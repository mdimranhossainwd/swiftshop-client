const Heading = ({ heading }) => {
  return (
    <>
      <div className="my-8">
        <h2 className="text-4xl font-medium text-center font-oswald">
          {heading}_
        </h2>
      </div>
    </>
  );
};

export default Heading;

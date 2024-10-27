import { useQuery } from "@tanstack/react-query";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useAxios from "../hooks/useAxios";
import Card from "./card/Card";
import Heading from "./shared/Heading";
const Features = () => {
  const axios = useAxios();

  // Get Features Product Data
  const getFeatureData = async () => {
    const { data } = await axios.get("/features");
    return data;
  };

  const { data: featureData } = useQuery({
    queryKey: ["featureData"],
    queryFn: getFeatureData,
  });

  console.log(featureData);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 2520, min: 1920 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container mx-auto">
      <Heading />

      <div className="my-6">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={2500}
          keyBoardControl={true}
          infinite={true}
        >
          {featureData?.length > 0 ? (
            featureData.map((item) => <Card key={item?._id} product={item} />)
          ) : (
            <div className="flex items-center"></div>
          )}
        </Carousel>
      </div>
    </div>
  );
};

export default Features;

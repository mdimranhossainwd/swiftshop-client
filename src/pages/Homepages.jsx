import BenefitsSection from "../components/BenefitsSection";
import Brand from "../components/Brand";
import Carousel from "../components/Carousel";
import Newsletter from "../components/Newsletter";
const Homepages = () => {
  return (
    <div>
      <Carousel />
      <BenefitsSection />
      <Newsletter />
      <Brand />
    </div>
  );
};

export default Homepages;

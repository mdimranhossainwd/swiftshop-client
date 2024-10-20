import BenefitsSection from "../components/BenefitsSection";
import Brand from "../components/Brand";
import Carousel from "../components/Carousel";
import Newsletter from "../components/Newsletter";
import PromoSections from "../components/PromoSections";
const Homepages = () => {
  return (
    <div>
      <Carousel />
      <BenefitsSection />
      <PromoSections />
      <Newsletter />
      <Brand />
    </div>
  );
};

export default Homepages;

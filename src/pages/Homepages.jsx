import BenefitsSection from "../components/BenefitsSection";
import Blogs from "../components/Blogs";
import Brand from "../components/Brand";
import Carousel from "../components/Carousel";
import Features from "../components/Features";
import Newsletter from "../components/Newsletter";
import PromoSections from "../components/PromoSections";
const Homepages = () => {
  return (
    <div>
      <Carousel />
      <BenefitsSection />
      <Features />
      <PromoSections />
      <Newsletter />
      <Blogs />
      <Brand />
    </div>
  );
};

export default Homepages;

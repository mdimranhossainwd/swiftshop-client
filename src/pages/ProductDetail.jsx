import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../App.css";
import ProductContent from "../components/ProductContent";
import TabContent from "../components/TabContent";
import ProductReview from "../components/form/ProductReview";

const ProductDetail = () => {
  const productInfo = useLoaderData();
  const {
    _id,
    name,
    categoryId,
    price,
    stock,
    description,
    highlights,
    specifications,
    images,
    brand,
    rating,
    warranty,
    returnPolicy,
  } = productInfo || {};

  return (
    <div className="container mx-auto mt-4">
      <div className="container mx-auto p-6 flex flex-col md:flex-row">
        <div className="md:w-1/2  space-y-4 flex flex-col items-center">
          <InnerImageZoom
            src={images}
            zoomSrc={images}
            alt="Product"
            zoomType="hover"
            zoomPreload={true}
            className="object-cover"
            hideCloseButton={true}
          />
        </div>
        <div>
          <ProductContent productInfo={productInfo} />
        </div>
      </div>
      <Tabs className=" mb-10">
        <TabList className="text-lg text-center items-center justify-center font-semibold">
          <Tab>Descriptions</Tab>
          <Tab>Additional Info</Tab>
          <Tab>Add Review</Tab>
        </TabList>

        <TabPanel className="mt-6 mx-8 md:mx-0 text-md text-[#928f8f]">
          {description} The iPad and Mac have become iconic products in the
          global tech industry, representing Apple's commitment to innovation
          and user-centric design. The iPad, first introduced in 2010,
          revolutionized the tablet market by offering a versatile device that
          fits between a smartphone and a laptop. It’s widely used for various
          purposes, including education, design, and entertainment, thanks to
          its powerful hardware, iOS ecosystem, and range of productivity apps
          like Procreate, iMovie, and Microsoft Office. The introduction of the
          Apple Pencil and Magic Keyboard has further enhanced its capabilities,
          making it a favorite among artists and professionals who seek a
          portable yet powerful tool. The Mac, on the other hand, has been a
          cornerstone of Apple's product lineup since the original Macintosh was
          launched in 1984. Known for its sleek design, robust performance, and
          macOS software, the Mac has evolved into different models, including
          the MacBook Air, MacBook Pro, iMac, and Mac Mini. These devices are
          favored by creative professionals, software developers, and business
          users for their seamless integration with other Apple products,
          high-resolution Retina displays, and powerful M-series chips that
          deliver unmatched speed and efficiency. The Mac's reliability and
          cutting-edge features have made it a staple in various industries,
          from music production to software development. Globally, both the iPad
          and Mac enjoy a strong user base, thanks to Apple’s extensive retail
          and online presence. They symbolize a blend of luxury and
          productivity, appealing to customers who value premium quality and a
          cohesive ecosystem. Apple's continuous updates to hardware and
          software ensure that these devices remain at the forefront of
          technology, setting benchmarks for competitors and consistently
          driving innovation in the tech world.
        </TabPanel>
        <TabPanel>
          <TabContent productInfo={productInfo} />
        </TabPanel>
        <TabPanel>
          <ProductReview />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ProductDetail;

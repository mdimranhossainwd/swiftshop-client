import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import { useLoaderData } from "react-router-dom";
import "../App.css"; // Ensure this import is correct

const ProductDetail = () => {
  const productInfo = useLoaderData();
  console.log(productInfo);

  return (
    <div className="container mx-auto">
      <div className="container mx-auto p-6 flex flex-col md:flex-row">
        <div className="md:w-1/2 flex flex-col items-center">
          <InnerImageZoom
            src="https://plus.unsplash.com/premium_photo-1714158925616-b2ca6115046c?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            zoomSrc="https://plus.unsplash.com/premium_photo-1728311732707-3391a4f7c09c?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Product"
            zoomType="hover"
            zoomPreload={true}
            className="w-full"
            hideCloseButton={true}
          />
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-2">
            WholeHearted Grain Free All Life Stages Duck
          </h2>
          <p className="text-red-600 text-xl font-bold mb-4">$10.99 - $42.99</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

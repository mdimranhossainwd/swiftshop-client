import { useParams } from "react-router-dom";
import Heading from "../../shared/Heading";

const UpdateProductForm = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <div className="max-w-6xl mx-auto px-6 mb-12 shadow-md rounded-md">
        <Heading heading="Update Product Info" />
        <form className="space-y-6">
          {/* Single Column Section */}
          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-2">Product Name:</label>
              <input
                type="text"
                id="name"
                className="w-full py-2 px-4 border border-gray-300 rounded"
                placeholder="Enter product name"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Description:</label>
              <textarea
                id="description"
                className="w-full p-4 border border-gray-300 rounded"
                placeholder="Enter product description"
                required
              />
            </div>
          </div>

          {/* Two Column Section */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-2">Category ID:</label>
              <input
                type="text"
                id="categoryId"
                className="w-full py-2 px-4 border border-gray-300 rounded"
                placeholder="Enter category ID"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Brand:</label>
              <input
                type="text"
                id="brand"
                className="w-full py-2 px-4 border border-gray-300 rounded"
                placeholder="Enter brand name"
                required
              />
            </div>
          </div>

          {/* Three Column Section */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block font-medium mb-2">Price:</label>
              <input
                type="number"
                id="price"
                className="w-full py-2 px-4 border border-gray-300 rounded"
                placeholder="Enter product price"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Stock:</label>
              <input
                type="number"
                id="stock"
                className="w-full py-2 px-4 border border-gray-300 rounded"
                placeholder="Enter stock quantity"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Warranty:</label>
              <input
                type="text"
                id="warranty"
                className="w-full py-2 px-4 border border-gray-300 rounded"
                placeholder="Enter warranty details"
              />
            </div>
          </div>

          {/* Four Column Section */}
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label className="block font-medium mb-2">RAM:</label>
              <input
                type="text"
                id="ram"
                className="w-full py-2 px-4 border border-gray-300 rounded"
                placeholder="Enter RAM size"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Storage:</label>
              <input
                type="text"
                id="storage"
                className="w-full py-2 px-4 border border-gray-300 rounded"
                placeholder="Enter storage capacity"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Processor:</label>
              <input
                type="text"
                id="processor"
                className="w-full py-2 px-4 border border-gray-300 rounded"
                placeholder="Enter processor details"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Graphics:</label>
              <input
                type="text"
                id="graphics"
                className="w-full py-2 px-4 border border-gray-300 rounded"
                placeholder="Enter graphics details"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block font-medium mb-2">Battery:</label>
                <input
                  type="text"
                  id="battery"
                  className="w-full py-2 px-4 border border-gray-300 rounded"
                  placeholder="Enter Battery details"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Dimensions:</label>
                <input
                  type="text"
                  id="dimensions"
                  className="w-full py-2 px-4 border border-gray-300 rounded"
                  placeholder="Enter Dimensions Performance details"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Rating:</label>
                <input
                  type="text"
                  id="rating"
                  className="w-full py-2 px-4 border border-gray-300 rounded"
                  placeholder="Rating"
                />
              </div>
            </div>
          </div>

          {/* Connectivity Section */}
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block font-medium mb-2">Audio:</label>
                <input
                  type="text"
                  id="audio"
                  className="w-full py-2 px-4 border border-gray-300 rounded"
                  placeholder="Enter audio details"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">
                  Operating System (OS):
                </label>
                <input
                  type="text"
                  id="os"
                  className="w-full py-2 px-4 border border-gray-300 rounded"
                  placeholder="Enter OS details"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Weight:</label>
                <input
                  type="text"
                  id="weight"
                  className="w-full py-2 px-4 border border-gray-300 rounded"
                  placeholder="Enter product weight"
                />
              </div>
            </div>
          </div>

          {/* Highlights Section */}
          <div>
            <label className="block font-medium mb-2">
              Highlights (comma-separated):
            </label>
            <input
              type="text"
              id="highlights"
              className="w-full py-2 px-4 border border-gray-300 rounded"
              placeholder="Enter product highlights"
            />
          </div>

          {/* Images Section */}
          <div>
            <label className="block font-medium mb-2">
              Images (comma-separated URLs):
            </label>
            <input
              type="text"
              id="images"
              className="w-full py-2 px-4 border border-gray-300 rounded"
              placeholder="Enter image URLs"
            />
          </div>

          {/* Return Policy Section */}
          <div>
            <label className="block font-medium mb-2">Return Policy:</label>
            <textarea
              id="returnPolicy"
              className="w-full py-2 px-4 border border-gray-300 rounded"
              placeholder="Enter return policy details"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 hover:bg-gradient-to-r hover:from-blue-500 hover:via-blue-400 hover:to-blue-700 text-white py-3 font-semibold rounded-md text-lg"
          >
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateProductForm;

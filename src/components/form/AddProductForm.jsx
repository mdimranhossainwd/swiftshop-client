import React from "react";
import Heading from "../shared/Heading";

const AddProductForm = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 shadow-md rounded-md">
      <Heading heading="Add a New Gem to Your Store" />
      <form className="space-y-6 ">
        {/* Single Column Section */}
        <div className="space-y-4 mt-8">
          <div>
            <label className="block font-medium mb-2">Product Name :-</label>
            <input
              type="text"
              className="w-full py-2 px-4 border border-gray-300 rounded"
              placeholder="Enter product name"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Description :-</label>
            <textarea
              className="w-full p-4 border border-gray-300 rounded"
              placeholder="Enter product description"
            />
          </div>
        </div>

        {/* Two Column Section */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-2">Category ID :- </label>
            <input
              type="text"
              className="w-full py-2 px-4 border border-gray-300 rounded"
              placeholder="Enter category ID"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Brand :-</label>
            <input
              type="text"
              className="w-full py-2 px-4 border border-gray-300 rounded"
              placeholder="Enter brand name"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Price :-</label>
            <input
              type="number"
              className="w-full py-2 px-4 border border-gray-300 rounded"
              placeholder="Enter product price"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Stock :-</label>
            <input
              type="number"
              className="w-full py-2 px-4 border border-gray-300 rounded"
              placeholder="Enter stock quantity"
            />
          </div>
        </div>

        {/* Three Column Section */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block font-medium mb-2">Rating :-</label>
            <input
              type="number"
              step="0.1"
              className="w-full py-2 px-4 border border-gray-300 rounded"
              placeholder="Enter product rating"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Warranty :-</label>
            <input
              type="text"
              className="w-full py-2 px-4 border border-gray-300 rounded"
              placeholder="Enter warranty details"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Return Policy :-</label>
            <input
              type="text"
              className="w-full py-2 px-4 border border-gray-300 rounded"
              placeholder="Enter return policy"
            />
          </div>
        </div>

        {/* Highlights Section */}
        <div>
          <label className="block font-medium mb-2">
            Highlights (comma-separated) :-
          </label>
          <input
            type="text"
            className="w-full py-2 px-4 border border-gray-300 rounded"
            placeholder="Enter product highlights"
          />
        </div>

        {/* Specifications Section */}
        <fieldset className="space-y-4">
          <legend className="text-lg font-medium mb-2">Specifications</legend>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-2">Dimensions :-</label>
              <input
                type="text"
                className="w-full py-2 px-4 border border-gray-300 rounded"
                placeholder="Enter dimensions"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Weight :-</label>
              <input
                type="text"
                className="w-full py-2 px-4 border border-gray-300 rounded"
                placeholder="Enter weight"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block font-medium mb-2">Connectivity :-</label>
              <input
                type="text"
                className="w-full py-2 px-4 border border-gray-300 rounded"
                placeholder="Enter connectivity options"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Audio :-</label>
              <input
                type="text"
                className="w-full py-2 px-4 border border-gray-300 rounded"
                placeholder="Enter audio details"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">
                Operating System :-
              </label>
              <input
                type="text"
                className="w-full py-2 px-4 border border-gray-300 rounded"
                placeholder="Enter operating system"
              />
            </div>
          </div>
        </fieldset>

        {/* Images Section */}
        <div>
          <label className="block font-medium mb-2">
            Images (comma-separated URLs) :-
          </label>
          <input
            type="text"
            className="w-full py-2 px-4 border border-gray-300 rounded"
            placeholder="Enter image URLs"
          />
        </div>

        {/* Submit Button */}
        <button
          type="button"
          className="w-full bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 hover:bg-gradient-to-r hover:from-blue-500 hover:via-blue-400 hover:to-blue-700 text-white py-3 font-semibold rounded-md text-lg"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;

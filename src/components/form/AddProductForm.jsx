import Heading from "../../shared/Heading";

const AddProductForm = () => {
  const addNewProduct = async (e) => {
    e.preventDefault();
    const form = e.target;

    // Extracting form data
    const name = form.name.value;
    const description = form.description.value;
    const categoryId = form.categoryId.value;
    const brand = form.brand.value;
    const price = parseFloat(form.price.value);
    const stock = parseInt(form.stock.value);
    const rating = parseFloat(form.rating.value);
    const warranty = form.warranty.value;
    const returnPolicy = form.returnPolicy.value;
    const highlights = form.highlights.value
      .split(",")
      .map((item) => item.trim());
    const dimensions = form.dimensions.value;
    const weight = form.weight.value;
    const connectivity = form.connectivity.value
      .split(",")
      .map((item) => item.trim());
    const audio = form.audio.value;
    const os = form.os.value;
    const ram = form.ram.value;
    const storage = form.storage.value;
    const graphics = form.graphics.value;
    const processor = form.processor.value;
    const battery = form.battery.value;
    const images = form.images.value.split(",").map((item) => item.trim());

    // Constructing data object to send to backend
    const formAllData = {
      name,
      categoryId,
      price,
      stock,
      description,
      highlights,
      specifications: {
        dimensions,
        processor,
        storage,
        ram,
        graphics,
        battery,
        connectivity,
        os,
        weight,
        audio,
      },
      images,
      brand,
      rating,
      warranty,
      returnPolicy,
    };

    console.log(formAllData);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 shadow-md rounded-md">
      <Heading heading="Add a New product" />
      <form onSubmit={addNewProduct} className="space-y-6">
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
              className="w-full p-4 border border-gray-300 rounded"
              id="description"
              placeholder="Enter product description"
              required
            />
          </div>
        </div>

        {/* Three Column Section */}
        <div className="grid grid-cols-3 gap-4">
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
        </div>

        {/* Four Column Section */}
        <div className="grid grid-cols-4 gap-4">
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

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 hover:bg-gradient-to-r hover:from-blue-500 hover:via-blue-400 hover:to-blue-700 text-white py-3 font-semibold rounded-md text-lg"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;

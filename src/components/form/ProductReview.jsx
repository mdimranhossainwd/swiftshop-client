import { useState } from "react";

const ProductReview = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      name,
      email,
      rating,
      review,
    };
    console.log(newReview);

    setName("");
    setEmail("");
    setRating(0);
    setReview("");
  };

  return (
    <div className="bg-white mx-6  md:w-3/5 p-6 rounded-lg border md:mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Submit Your Review</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Rating */}
        <div className="flex items-center space-x-2">
          <label className="text-lg font-medium">Add Your Rating:</label>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                onClick={() => setRating(index + 1)}
                className={`cursor-pointer text-2xl ${
                  index < rating ? "text-yellow-500" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="mail@page.com"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>

        {/* Review Text Area */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Write Your Review
          </label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write here..."
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-200"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-white hover:bg-gradient-to-r hover:from-blue-400 hover:via-blue-500 hover:to-blue-700 font-semibold py-2 rounded-md  transition"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ProductReview;

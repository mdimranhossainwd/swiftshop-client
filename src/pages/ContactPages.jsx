import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const ContactPages = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <div>
      <div className="border-b pb-4 my-5">
        <h3 className="text-md container mx-auto">
          <span className="">Home</span> /{" "}
          <span className="text-gray-500">Contact</span>
        </h3>
      </div>
      <div className="container mx-auto my-8">
        <div style={{ height: "520px", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent lat={59.955413} lng={30.337844} />
          </GoogleMapReact>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 my-9 p-8">
          {/* Get In Touch Form */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600 mb-4">
              Your email address will not be published. Required fields are
              marked *
            </p>
            <form className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Your Name Here"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-gray-500"
                />
                <input
                  type="email"
                  placeholder="your mail address here"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-gray-500"
                />
              </div>
              <input
                type="text"
                placeholder="Phone Number *"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-gray-500"
              />
              <textarea
                placeholder="Message *"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-gray-500 h-32 resize-none"
              ></textarea>
              <button
                type="submit"
                className="bg-black text-white py-2 px-7 rounded-md hover:bg-gray-800"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-4">
              Class aptent taciti sociosqu ad litora torquent per conubia nostra
              per inceptos pretium.
            </p>
            <div className="space-y-2">
              <p className="text-gray-800 font-semibold">Location Store:</p>
              <p className="text-gray-600">
                268 St, South New York/NY 98944, United States.
              </p>

              <p className="text-gray-800 font-semibold mt-4">Phone Number:</p>
              <p className="text-gray-600">212 654 3322</p>
              <p className="text-gray-600">(+100) 666-456-7890</p>

              <p className="text-gray-800 font-semibold mt-4">Email Address:</p>
              <p className="text-gray-600">swiftshop1@mern.com</p>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-500">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-red-600 hover:text-red-700">
                  <i className="fab fa-pinterest-p"></i>
                </a>
                <a href="#" className="text-yellow-500 hover:text-yellow-600">
                  <i className="fab fa-snapchat-ghost"></i>
                </a>
                <a href="#" className="text-black hover:text-gray-800">
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPages;

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Carousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        // navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper my-4"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {/* First Slide */}
        <SwiperSlide>
          <div className="relative w-full h-[500px]">
            <img
              src="https://plus.unsplash.com/premium_photo-1683121817275-85d1dcf9e4c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Banner 1"
              className="object-cover w-full h-full"
            />
            <div className="absolute flex items-center inset-0 bg-black bg-opacity-70">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="animated-div container  mx-10 md:mx-auto"
              >
                <motion.h4
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="animated-heading text-lg font-normal mb-6 text-white"
                >
                  Make Your Life Smart
                </motion.h4>
                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="animated-heading font-oswald text-5xl md:text-7xl mb-14 font-bold text-white"
                >
                  Welcome to <span className="text-[#128AED]">Swift Shop</span>
                </motion.h2>
                <motion.button
                  whileHover={{ scale: 0.9 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="animated-button bg-[#128AED] hover:bg-white hover:text-[#128AED] font-semibold  text-white py-3 px-10 rounded-full"
                >
                  Shop Now
                </motion.button>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>

        {/* Second Slide */}
        <SwiperSlide>
          <div className="relative w-full h-[500px]">
            <img
              src="https://plus.unsplash.com/premium_photo-1700824490915-ce7cfd18efcd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Banner 2"
              className="object-cover w-full h-full"
            />
            <div className="absolute flex items-center inset-0 bg-black bg-opacity-70">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="animated-div container mx-10 md:mx-auto"
              >
                <motion.h4
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="animated-heading text-md  font-normal mb-6 text-white"
                >
                  Explore Our Unique Collection
                </motion.h4>
                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="animated-heading font-oswald text-5xl md:text-7xl mb-14 font-bold text-white"
                >
                  <span className="text-[#128AED]">Fashion</span> Meets
                  Functionalityn
                </motion.h2>
                <motion.button
                  whileHover={{ scale: 0.9 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="animated-button bg-[#128AED] hover:bg-white hover:text-[#128AED] font-semibold  text-white py-3 px-10 rounded-full"
                >
                  Shop Now
                </motion.button>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>

        {/* Third Slide */}
        <SwiperSlide>
          <div className="relative w-full h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1585202505656-c6b17753db12?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Banner 3"
              className="object-cover w-full h-full"
            />
            <div className="absolute flex items-center inset-0 bg-black bg-opacity-70">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="animated-div container mx-10 md:mx-auto"
              >
                <motion.h4
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="animated-heading text-md font-normal mb-6 text-white"
                >
                  Join Our Community
                </motion.h4>
                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="animated-heading font-oswald text-5xl md:text-7xl mb-14 font-bold text-white"
                >
                  Be a Part of{" "}
                  <span className="text-[#128AED]">
                    Something <br /> Great
                  </span>
                </motion.h2>
                <motion.button
                  whileHover={{ scale: 0.9 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="animated-button bg-[#128AED] hover:bg-white hover:text-[#128AED] font-semibold  text-white py-3 px-10 rounded-full"
                >
                  Shop Now
                </motion.button>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;

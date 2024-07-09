// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

import bg1 from "../assets/images/carousel1.jpg";
import bg2 from "../assets/images/carousel2.jpg";
import bg3 from "../assets/images/carousel3.jpg";

const Carosel = () => {
  return (
    <div className="container px-6 py-10 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper min-h-[calc(100vh-306px)]"
      >
        <SwiperSlide>
          <Slide
            image={bg1}
            text="Get Your Web Development Projects Done in Minutes"
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bg2}
            text="Get Your Graphics Design Done in Minutes"
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bg3}
            text="Get Your Digital Marketing Campaigns Done in Minutes"
          ></Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carosel;

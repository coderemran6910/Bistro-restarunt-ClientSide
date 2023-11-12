// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";

// Css
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import SectionTitle from "../../../Components/Shared/SectionTitle";
const Category = () => {
  return (
    <div>
      <SectionTitle
      heading={"Order Online "}
      subHeading=  {"From 11.00am to 10.00pm" }
      />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide>
          <img className="w-full"  src={img1} alt="" />
          <h2 className="text-4xl  uppercase text-center -mt-24 text-white ">salad</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={img2} alt="" />
          <h2 className="text-4xl  uppercase text-center -mt-24 text-white ">Fizza</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={img3} alt="" />
          <h2 className="text-4xl  uppercase text-center -mt-24 text-white ">salad</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={img4} alt="" />
          <h2 className="text-4xl  uppercase text-center -mt-24 text-white ">Soups</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={img5} alt="" />
          <h2 className="text-4xl  uppercase text-center -mt-24 text-white ">Deserts</h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;

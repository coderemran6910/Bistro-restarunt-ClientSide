// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'

// Css
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
const Category = () => {
    return (
        <div>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={img1} alt="" />
            <h2 className='text-4xl -mt-25 uppercase text-center'>salad</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
            <h2>Fizza</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={img3} alt="" />
        <h2>salad</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={img4} alt="" />
        <h2>Soups</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={img5} alt="" />
        <h2>Deserts</h2>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Category;
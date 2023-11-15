
import {useState, useEffect} from 'react' 
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img from '../../../assets/icon/review.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import SectionTitle from '../../../Components/Shared/SectionTitle';

export default function Review() {
    const [review, setReview] = useState([])

    useEffect(()=>{
        fetch('review.json')
        .then(res => res.json())
        .then(data => setReview(data))
    } , [])


  return (
    
    <div className='h-[80vh] '>

    

<SectionTitle 
        
        heading="What Our Costumers Say"
        subHeading="Testimonial"
        />
      <Swiper
      
        pagination={{
          type: '',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-6/12 flex flex-col justify-center items-center "
      >

     


       {
        review.map(item => <SwiperSlide key={review._id}>
            
            <div className='flex flex-col gap-5 justify-center items-center px-20'>
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <img src={img} alt="" />
                <p>{item.details} </p>
                <h3 className='text-3xl font-bold text-[#D99904] uppercase'>{item.name}</h3>


            </div>


        </SwiperSlide>)
       }
      </Swiper>
      </div>
    
  );
}

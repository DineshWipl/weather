// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Weather from '../components/Weather'


const AutoScrollCarousel = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={4}
      loop={true} // Enable continuous loop
      autoplay={{
        delay: 0, // No delay between slides
        disableOnInteraction: false,
        pauseOnMouseEnter: true, // Optional: pause when the user hovers over
      }}
      speed={2000} // Set speed for smooth, continuous scrolling
    >
      <SwiperSlide> <div className='weather-box'><Weather city="London" /></div></SwiperSlide>
      <SwiperSlide> <div className='weather-box'><Weather city="New York" /></div></SwiperSlide>
      <SwiperSlide> <div className='weather-box'><Weather city="Dubai" /></div></SwiperSlide>
      <SwiperSlide> <div className='weather-box'><Weather city="Mumbai" /></div></SwiperSlide>
      <SwiperSlide> <div className='weather-box'><Weather city="Delhi" /></div></SwiperSlide>
      {/* Add more slides as needed */}
      <style jsx>{`

.weather-box{
  padding:0px 30px 30px 30px;
  border-radius:8px;
  box-shadow: 0px 2px 8px #257e89e0;

}
.weather-box p span{
  color: #c17215;
}

    `}
</style>
    </Swiper>

    
  );
};

export default AutoScrollCarousel;

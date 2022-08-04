import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default () => {
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={50}
      slidesPerView={4}
    >
      {/* Example */}
      
       {/* {data.map(property => {
        return(
          <SwiperSlide key={property.id}>
             <Card property = {property} />
          </SwiperSlide>
        )
       })} */}
      
     
    </Swiper>
  );
};

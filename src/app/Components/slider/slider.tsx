import { Swiper, SwiperSlide } from "swiper/react";
import data from "./data";
import SliderUsCard from "design-system/components/SliderCard/SliderCard";

import "swiper/css";
import "./slider.scss";

export default () => {
  return (
    <section className="slider">
      <div className="container">
            <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={50}
            slidesPerView={3}
          >
            
            {data.map(property => {
              return(
                <SwiperSlide key={property.id}>
                  <SliderUsCard property = {property} />
                </SwiperSlide>
              )
            })}
            
          
            </Swiper>
      </div>
    </section>

  );
};

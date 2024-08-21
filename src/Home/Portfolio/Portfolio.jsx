import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./Portfolio.css";
import img from "../../Assets/Portfolio/img.jfif"
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

export default function Portfolio() {
  return (
    <section className="portfolio-section container">
      <div className="portfolio-header">
        <div>
          <h2>PORTFOLIO</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </p>
        </div>
        <a href="#more" className="more-work-link">
          MORE WORK <span className="arrow">→</span>
        </a>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        freeMode={true}
        pagination={false}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="portfolio-swiper"
      >
        <SwiperSlide>
          <div className="portfolio-card">
            <img src={img} alt="Project 1" className="portfolio-image" />
            <h3>OUR SERVICES</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio-card">
            <img src={img} alt="Project 1" className="portfolio-image" />
            <h3>OUR SERVICES</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio-card">
            <img src={img} alt="Project 1" className="portfolio-image" />
            <h3>OUR SERVICES</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio-card">
            <img src={img} alt="Project 1" className="portfolio-image" />
            <h3>OUR SERVICES</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio-card">
            <img src={img} alt="Project 2" className="portfolio-image" />
            <h3>OUR SERVICES</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio-card">
            <img src={img} alt="Project 2" className="portfolio-image" />
            <h3>OUR SERVICES</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio-card">
            <img src={img} alt="Project 2" className="portfolio-image" />
            <h3>OUR SERVICES</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </SwiperSlide>
        {/* Repeat SwiperSlide as needed */}
      </Swiper>
    </section>
  );
}

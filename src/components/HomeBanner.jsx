import React from "react";
import "../assets/css/HomeBanner.css";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const HomeBanner = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, easing: "ease", once: true });
  }, []);
  return (
    <div className="header-container">
      <div className="backgroud-header">
        <div className="banner-container">
          <div className="banner-tittle" data-aos="fade-right" data-aos-delay="350ms">
            <h1 className="heading-tittle">Devplus will support the early stage developers go the right career path</h1>
          </div>
          <div className="banner-content" data-aos="fade-left" data-aos-delay="950ms">
            <p>
              Devplus is not a training center, it’s battle campus for you to level up your skillsets and ready to onboard any projects in our “kindest”
              companies listing
            </p>
          </div>
          <div className="banner-btn" data-aos="fade-up" data-aos-delay="1600ms">
            <a>Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;

import React from "react";
import "../assets/css/HomeBanner.css";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from "react-query";

import axios from "axios";

const HomeBanner = () => {
  const homebannerData = useQuery({ queryKey: ["banner"], queryFn: () => axios.get("http://localhost:3000/homebanner").then((res) => res.data) });

  useEffect(() => {
    Aos.init({ duration: 1500, easing: "ease", once: true });
  }, []);

  if (!homebannerData.isLoading)
    return (
      <div className="header-container">
        <div className="backgroud-header">
          <div className="banner-container">
            <div className="banner-tittle" data-aos="fade-right" data-aos-delay="350ms">
              <h1 className="heading-tittle">{homebannerData.data.title}</h1>
            </div>
            <div className="banner-content" data-aos="fade-left" data-aos-delay="950ms">
              <p>{homebannerData.data.description}</p>
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

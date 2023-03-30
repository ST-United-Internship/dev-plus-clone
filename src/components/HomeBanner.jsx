import "../assets/css/HomeBanner.css";

const HomeBanner = ({ homeBannerData }) => {
  return (
    <div className="header-container">
      <div className="backgroud-header">
        <div className="banner-container">
          <div
            className="banner-tittle"
            data-aos="fade-right"
            data-aos-delay="350ms"
          >
            <h1 className="heading-tittle">{homeBannerData?.title}</h1>
          </div>
          <div
            className="banner-content"
            data-aos="fade-left"
            data-aos-delay="950ms"
          >
            <p>{homeBannerData?.description}</p>
          </div>
          <div
            className="banner-btn"
            data-aos="fade-up"
            data-aos-delay="1600ms"
          >
            <a>Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;

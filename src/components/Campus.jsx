import { Row, Col } from "antd";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../assets/css/campus.css";
import { useCampus } from "../hooks/useCampus";

export const Campus = () => {
  const lsData = useCampus();
  useEffect(() => {
    Aos.init({ duration: 2000, once: true, easing: "ease-in-out" });
  }, []);
  return (
    !lsData.isLoading && (
      <Row
        justify="center"
        className="popular-courses"
        style={{
          backgroundImage:
            "url(	https://devplus.edu.vn/assets/images/bg/home-8-bg.jpg)",
        }}
      >
        <Col span={16} className="campus-container">
          <h2>Our main campus</h2>
          <Row justify="space-between">
            {lsData.data.map((data, index) => (
              <Col
                span={24}
                data-aos="fade-up"
                data-aos-delay={`${(index + 3) * 100}`}
                md={{ span: 11 }}
                lg={{ span: 7 }}
                key={index}
              >
                <div className="course-item">
                  <div>
                    <img src={data.img}></img>
                  </div>
                  <h3>{data.title}</h3>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    )
  );
};

import { Row, Col } from "antd";
import "../assets/css/campus.css";

export const Campus = ({ campusData }) => {
  return (
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
          {campusData.map((data, index) => (
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
  );
};

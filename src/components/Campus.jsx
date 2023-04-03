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
      <Col
        xs={{ span: 23 }}
        sm={{ span: 24 }}
        md={{ span: 22 }}
        lg={{ span: 16 }}
        xl={{ span: 16 }}
        xxl={{ span: 16 }}
        className="campus-container"
      >
        <h2>Our main campus</h2>
        <Row justify="space-between" gutter={[16, 16]}>
          {campusData.map((data, index) => (
            <Col
              data-aos="fade-up"
              data-aos-delay={`${(index + 3) * 100}`}
              span={24}
              md={{ span: 12 }}
              lg={{ span: 8 }}
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

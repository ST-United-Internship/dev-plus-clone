import { Col, Grid, Row } from "antd";
import "../assets/css/about-road.css";
const { useBreakpoint } = Grid;

export const AboutRoad = ({ aboutRoadData }) => {
  const { xs, sm, lg } = useBreakpoint();
  return (
    <Row justify="center" className="about-road">
      <Col className="container" span={16}>
        <Row style={{ flexWrap: "wrap-reverse" }}>
          <Col
            className="about-container"
            span={24}
            style={{
              padding: xs ? "40px 30px 50px" : "60px 60px 70px",
            }}
            lg={{ span: 14 }}
          >
            <h3 data-aos="fade-up" data-aos-delay="300">
              ABOUT DEVPLUS
            </h3>
            <h2
              data-aos="fade-up"
              data-aos-delay="400"
              style={{
                fontSize: xs ? "25px" : sm ? "30px" : lg ? "35px" : "36px",
              }}
            >
              {aboutRoadData.title}
            </h2>
            <p data-aos="fade-up" data-aos-delay="500">
              {aboutRoadData.desc}
            </p>
          </Col>
          <Col
            className="road-container"
            offset={0}
            span={24}
            lg={{ offset: 2, span: 8 }}
          >
            <h4>Road to be a devplus</h4>
            <ul>
              {aboutRoadData.road.map((data, index) => (
                <li
                  key={data.id}
                  data-aos="fade-up"
                  data-aos-delay={`${(index + 3) * 100}`}
                  style={{ backgroundColor: "#e7f4f6" }}
                >
                  <span>{data.id}</span>
                  {data.title}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

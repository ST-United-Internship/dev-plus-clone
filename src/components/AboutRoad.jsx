import { Row, Col, Grid } from "antd";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import "../assets/css/about-road.css";
const { useBreakpoint } = Grid;

const api = "http://localhost:3000/";

export const AboutRoad = () => {
  const aboutData = useQuery({
    queryKey: ["about"],
    queryFn: async ({ queryKey }) => {
      const result = await axios.get(api + queryKey);
      return result.data;
    },
  });
  const lsData = useQuery({
    queryKey: ["road"],
    queryFn: async ({ queryKey }) => {
      const result = await axios.get(api + queryKey);
      return result.data;
    },
  });
  const { xs, sm, lg } = useBreakpoint();
  useEffect(() => {
    Aos.init({ duration: 2000, once: true, easing: "ease-in-out" });
  }, []);
  return (
    !aboutData.isLoading &&
    !lsData.isLoading && (
      <Row justify="center" className="about-road">
        <Col className="container" span={16}>
          <Row style={{ flexWrap: "wrap-reverse" }}>
            <Col
              className="about-container"
              span={24}
              style={{
                padding: xs ? "40px 30px 90px" : "60px 60px 110px",
                marginTop: lg ? "0" : "70px",
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
                {aboutData.data.title}
              </h2>
              <p data-aos="fade-up" data-aos-delay="500">
                {aboutData.data.desc}
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
                {lsData.data.map((data, index) => (
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
    )
  );
};

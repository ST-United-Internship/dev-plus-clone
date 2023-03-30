import { Col, Row } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useEffect, useState } from "react";
import "antd/dist/antd.css";

import "./css/skillsgrid.css";

function BasicExample() {
  const [itemData, setItemData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3004/item").then((response) => {
      const data = response.data;
      console.log(data);
      setItemData({ data });
    });
  }, []);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Row className="item-container" gutter={30}>
        {itemData?.data?.map((item) => {
          console.log(item.id);
          return (
            <Col
              data-aos="fade-up"
              data-aos-duration={item.id * 100 + 600}
              className="gutter-row"
              span={8}
            >
              <div className="container-card" style={{ display: "flex" }}>
                <div className="image">
                  <img className="image-item" src={item.image} />
                </div>
                <div className="text-title">
                  <h4 className="title">{item.title}</h4>
                  <span className="courses">{item.courses}</span>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
export default BasicExample;

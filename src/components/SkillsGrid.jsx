import { Col, Row } from "antd";

import axios from "axios";
import { useEffect, useState } from "react";
import Container from "./container/Container";
import "../assets/css/skillsgrid.css";

function BasicExample() {
  const [itemData, setItemData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/item").then((response) => {
      const data = response.data;
      setItemData(data);
    });
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "#f3f8f9" }}>
        <Container>
          <Row
            className="skill-container"
            wrap={true}
            gutter={[16, 16]}
            justify="center"
          >
            <Col span={24}>
              <h1>What an engineer after Devplus will must have?</h1>
            </Col>

            {itemData?.map((skill) => (
              <Col
                key={skill.id}
                xs={{ span: 22 }}
                sm={{ span: 22 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
                xl={{ span: 8 }}
                xxl={{ span: 8 }}
              >
                <div className="skill-item">
                  <div className="item-img">
                    <img src={skill.image} />
                  </div>

                  <div className="text-title">
                    <h4 className="title">Programing foundation</h4>
                    <span className="courses">Algorithm, Design pattern</span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}
export default BasicExample;

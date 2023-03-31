import { Col, Row } from "antd";

import "../assets/css/skillsgrid.css";

const Skills = ({ skills }) => {
  return (
    <>
      <div style={{ backgroundColor: "#f3f8f9" }}>
        <Row justify="center">
          <Col
            xs={{ span: 23 }}
            sm={{ span: 24 }}
            md={{ span: 22 }}
            lg={{ span: 16 }}
            xl={{ span: 16 }}
            xxl={{ span: 16 }}
          >
            <Row
              className="skill-container"
              wrap={true}
              gutter={[16, 16]}
              justify="space-between"
            >
              <Col span={24}>
                <h1>What an engineer after Devplus will must have?</h1>
              </Col>

              {skills?.map((skill) => (
                <Col
                  key={skill?.id}
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}
                  xl={{ span: 12 }}
                  xxl={{ span: 12 }}
                >
                  <div className="skill-item">
                    <div className="item-img">
                      <img src={skill?.image} />
                    </div>

                    <div className="text-title">
                      <h4 className="title">{skill?.title}</h4>
                      <span className="courses">{skill?.courses}</span>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Skills;

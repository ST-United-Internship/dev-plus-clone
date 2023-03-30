import { Col, Row } from "antd";

import "../assets/css/admin.css";

const Adminision = () => {
  return (
    <Row className="mau">
      <Col span={24} lg={{ span: 12 }}>
        <div>
          <img
            className="anhadmin"
            src="https://devplus.edu.vn/assets/images/devplus/Admission_for_2021.png"
          />
        </div>
      </Col>

      <Col span={24} lg={{ span: 12 }}>
        <div class="dstext">
          <div class="content">
            <div class="chu">
              <h2>Admission for 2021</h2>
              <p class="line-one">
                Disclaimer: This position is expected to start around Feb 2022
                and continue through the entire Summer term. We ask for a
                minimum of 12 weeks, full-time, for most internships. Please
                consider before submitting an application.
              </p>
              <p class="line-two">
                Devplus aims to provide students the chance to work with our
                clients and awesome mentors to level up your programing skillset
                in the RIGHT path. With your education and experience, you will
                be able to take on real-world challenges from day one.
              </p>
            </div>

            <div class="Apply">
              <a class="nutbam" href="#">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Adminision;

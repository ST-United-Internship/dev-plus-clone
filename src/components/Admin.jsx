import { Col, Row } from "antd";
import "../assets/css/admin.css";

const Admin = ({ admin }) => {
  return (
    <Row className="mau">
      <Col span={24} lg={{ span: 12 }}>
        <div>
          <img className="anhadmin" src={admin?.image} />
        </div>
      </Col>

      <Col span={24} lg={{ span: 12 }}>
        <div class="dstext">
          <div class="content">
            <div class="chu">
              <h2>Admission for 2021</h2>
              <p class="line-one">
                <>
                  <div>{admin?.Disclaimer}</div>
                </>
              </p>
              <p class="line-two">
                <>
                  <div>{admin?.title}</div>
                </>
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

export default Admin;

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
        <div className="dstext">
          <div className="content">
            <div className="chu">
              <h2>Admission for 2021</h2>
              <p className="line-one">
                <span>{admin?.Disclaimer}</span>
              </p>
              <p className="line-two">
                <span>{admin?.title}</span>
              </p>
            </div>
            <div className="Apply">
              <a className="nutbam" href="#">
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

import { Col, Row } from "antd";
import "../assets/css/footer.css";
import * as AntIcon from "@ant-design/icons";
import Container from "./container/Container";

const Footer = ({ footerData }) => {
  return (
    <footer className="rs-footer">
      <div className="footer-top">
        <Row justify="center">
          <Col
            className="faq-container"
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 22 }}
            lg={{ span: 20 }}
            xl={{ span: 18 }}
            xxl={{ span: 16 }}
          >
            <div className="footer-container">
              <Row justify="space-between">
                <Col span={24} lg={{ span: 5 }}>
                  <h4 className="widget-title">{footerData[0]?.title}</h4>
                  <ul className="site-map">
                    <li>{footerData[0]?.values}</li>
                  </ul>
                </Col>
                <Col span={24} lg={{ span: 5 }}>
                  <h4 className="widget-title">{footerData[1]?.title}</h4>
                  <ul className="site-map">
                    {footerData[1]?.values.map((item, index) => {
                      return (
                        <li key={index}>
                          <a href="#">{item}</a>
                        </li>
                      );
                    })}
                  </ul>
                </Col>
                <Col span={24} lg={{ span: 5 }}>
                  <h4 className="widget-title">{footerData[2]?.title}</h4>
                  <ul className="site-map">
                    {footerData[2]?.values.map((item, index) => {
                      return (
                        <li key={index}>
                          <a href="#">{item}</a>
                        </li>
                      );
                    })}
                  </ul>
                </Col>
                <Col span={24} lg={{ span: 5 }}>
                  <h4 className="widget-title">{footerData[3]?.title}</h4>
                  <ul className="address-widget">
                    {footerData[3]?.values.map((item, index) => {
                      const Icon = AntIcon[item?.icon];
                      return (
                        <li key={index}>
                          <Icon />
                          <div className="desc">{item?.value}</div>
                        </li>
                      );
                    })}
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
      <div className="footer-bottom">
        <Container>
          <div className="footer-container">
            <Row>
              <Col
                span={24}
                lg={{ span: 12 }}
                style={{ display: "flex", alignItems: "center" }}
              >
                <div className="footer-logo">
                  <a className="pointer-default">
                    <img src={footerData[4]?.image} alt="art-board-2" />
                  </a>
                </div>
              </Col>

              <Col span={24} lg={{ span: 12 }}>
                <ul className="footer-social" style={{ textAlign: "right" }}>
                  <li>
                    <a
                      href="https://www.facebook.com/Devplusprogramme"
                      target="_blank"
                    >
                      <AntIcon.FacebookFilled />
                    </a>
                  </li>
                  <li className="span-fb">
                    {footerData[4]?.titleFooterBottom}
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;

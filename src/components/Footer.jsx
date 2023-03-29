import { Col, Row } from "antd";
import "../assets/css/footer.css";
import * as AntIcon from "@ant-design/icons";
import { useEffect, useState } from "react";
import axios from "axios";

const Footer = () => {
  const [footerData, setFooterData] = useState([]);
  const getFooterData = () => {
    const res = axios.get("http://localhost:3000/footer").then((response) => {
      const footerData = response.data;
      setFooterData(footerData);
    });
    return res;
  };
  useEffect(() => {
    getFooterData();
  }, []);

  if (footerData.length > 0)
    return (
      <footer className="rs-footer">
        <div className="footer-top">
          <Row justify={"center"}>
            <Col span={24} lg={{ span: 5, offset: 2 }}>
              <h4 className="widget-title">{footerData[0].title}</h4>
              <ul className="site-map">
                <li>{footerData[0].values}</li>
              </ul>
            </Col>
            <Col span={24} lg={{ span: 5 }}>
              <h4 className="widget-title">{footerData[1].title}</h4>
              <ul className="site-map">
                {footerData[1].values.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href="#">{item}</a>
                    </li>
                  );
                })}
              </ul>
            </Col>
            <Col span={24} lg={{ span: 5 }}>
              <h4 className="widget-title">{footerData[2].title}</h4>
              <ul className="site-map">
                {footerData[2].values.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href="#">{item}</a>
                    </li>
                  );
                })}
              </ul>
            </Col>
            <Col span={24} lg={{ span: 5 }}>
              <h4 className="widget-title">{footerData[3].title}</h4>
              <ul className="address-widget">
                {footerData[3].values.map((item, index) => {
                  const Icon = AntIcon[item.icon];
                  return (
                    <li key={index}>
                      <Icon />
                      <div className="desc">{item.value}</div>
                    </li>
                  );
                })}
              </ul>
            </Col>
          </Row>
        </div>
        <div className="footer-bottom">
          <Row>
            <Col span={24} lg={{ span: 8, offset: 4 }}>
              <div className="footer-logo">
                <a className="pointer-default">
                  <img src={footerData[4].image} alt="art-board-2" />
                </a>
              </div>
            </Col>

            <Col span={24} lg={{ span: 8, offset: 4 }}>
              <ul className="footer-social">
                <li>
                  <a
                    href="https://www.facebook.com/Devplusprogramme"
                    target="_blank"
                  >
                    <AntIcon.FacebookFilled />
                  </a>
                </li>
                <li className="span-fb">{footerData[4].titleFooterBottom}</li>
              </ul>
            </Col>
          </Row>
        </div>
      </footer>
    );
};

export default Footer;

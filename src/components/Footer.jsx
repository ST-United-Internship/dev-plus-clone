import { Col, Row } from "antd";
import "../assets/css/footer.css";
import * as AntIcon from "@ant-design/icons";
import { useGetFooter } from "../hooks/useFooter";

const Footer = () => {
  const footerData = useGetFooter();

  const dataOfFooter = footerData.data;

  if (!footerData.isLoading)
    return (
      <footer className="rs-footer">
        <div className="footer-top">
          <div className="footer-container">
            <Row justify={"center"}>
              <Col span={24} lg={{ span: 6, offset: 1 }}>
                <h4 className="widget-title">{dataOfFooter[0]?.title}</h4>
                <ul className="site-map">
                  <li>{dataOfFooter[0].values}</li>
                </ul>
              </Col>
              <Col span={24} lg={{ span: 5 }}>
                <h4 className="widget-title">{dataOfFooter[1]?.title}</h4>
                <ul className="site-map">
                  {dataOfFooter[1].values.map((item, index) => {
                    return (
                      <li key={index}>
                        <a href="#">{item}</a>
                      </li>
                    );
                  })}
                </ul>
              </Col>
              <Col span={24} lg={{ span: 5 }}>
                <h4 className="widget-title">{dataOfFooter[2]?.title}</h4>
                <ul className="site-map">
                  {dataOfFooter[2].values.map((item, index) => {
                    return (
                      <li key={index}>
                        <a href="#">{item}</a>
                      </li>
                    );
                  })}
                </ul>
              </Col>
              <Col span={24} lg={{ span: 5 }}>
                <h4 className="widget-title">{dataOfFooter[3]?.title}</h4>
                <ul className="address-widget">
                  {dataOfFooter[3]?.values.map((item, index) => {
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
        </div>
        <div className="footer-bottom">
          <div className="footer-container">
            <Row>
              <Col
                span={24}
                lg={{ span: 6, offset: 2 }}
                style={{ display: "flex", alignItems: "center" }}
              >
                <div className="footer-logo">
                  <a className="pointer-default">
                    <img src={dataOfFooter[4]?.image} alt="art-board-2" />
                  </a>
                </div>
              </Col>

              <Col span={24} lg={{ span: 6, offset: 10 }}>
                <ul className="footer-social">
                  <li>
                    <a
                      href="https://www.facebook.com/Devplusprogramme"
                      target="_blank"
                    >
                      <AntIcon.FacebookFilled />
                    </a>
                  </li>
                  <li className="span-fb">
                    {dataOfFooter[4]?.titleFooterBottom}
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </div>
      </footer>
    );
};

export default Footer;

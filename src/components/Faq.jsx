import "../assets/css/faq.css";
import { Row, Col, Collapse } from "antd";
import {
  BellOutlined,
  CaretRightOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const Faq = ({ concerns }) => {
  const { Panel } = Collapse;

  const panelStyle = {
    marginBottom: 24,
    border: "none",
    borderRadius: "none",
  };
  const [isDisplayVideo, setIsDisplayVideo] = useState(false);

  const changeColorActive = (key) => {
    const antCollapseHeaders = document.querySelectorAll(
      ".ant-collapse-header"
    );
    const bellIcons = document.querySelectorAll(".anticon.anticon-bell");

    if (key[0] === undefined) {
      // Reset state to defaut
      for (const antCollapseHeader of antCollapseHeaders) {
        antCollapseHeader.style.backgroundColor = "#fff";
        antCollapseHeader.style.color = "#000";
      }

      for (const bellIcon of bellIcons) {
        bellIcon.style.color = "#000";
      }

      return;
    }

    // Change new sate
    const antCollapseHeaderIndex = key[0] - 1;
    antCollapseHeaders[antCollapseHeaderIndex].style.backgroundColor =
      "#226fb7";
    antCollapseHeaders[antCollapseHeaderIndex].style.color = "#fff";

    const bellIconIndex = key[0] - 1;
    bellIcons[bellIconIndex].style.color = "red";
  };

  return (
    <>
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
          <Row justify={"center"} wrap={true} className="">
            <Col
              className="concerns-container"
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 22 }}
              lg={{ span: 12 }}
              xl={{ span: 12 }}
              xxl={{ span: 12 }}
            >
              <h1 className="concern-title">Some common concerns</h1>
              <Collapse
                accordion
                bordered={false}
                onChange={changeColorActive}
                style={{ backgroundColor: "#f9f8f8" }}
                expandIcon={({ isActive }) => (
                  <BellOutlined
                    className="custom-bell-icon"
                    rotate={isActive ? 0 : 0}
                  />
                )}
                destroyInactivePanel={true}
              >
                {concerns?.map((concern) => (
                  <Panel
                    className="custom-panel"
                    header={concern?.question}
                    key={concern.id}
                    style={panelStyle}
                    id={`panel-${concern.id}`}
                  >
                    <p className="panel-desc">{concern?.answer}</p>
                  </Panel>
                ))}
              </Collapse>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
              xl={{ span: 12 }}
              xxl={{ span: 12 }}
            >
              <div className="faq-img-container">
                <img
                  src="https://devplus.edu.vn/assets/images/devplus/video_03.png"
                  alt="img"
                />
                <div
                  className="btn-play-container"
                  onClick={() => setIsDisplayVideo(true)}
                >
                  <div className="blob blue">
                    <CaretRightOutlined className="btn-icon-play" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className={isDisplayVideo ? "show-video" : "hide-video"}>
        <div>
          <div>
            <CloseOutlined
              className="btn-close"
              onClick={() => {
                setIsDisplayVideo(false);
              }}
            />
          </div>
          <iframe
            width="900"
            height="507"
            src="https://www.youtube.com/embed/mUjhiT0zSKI"
            title="DevPlus"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Faq;

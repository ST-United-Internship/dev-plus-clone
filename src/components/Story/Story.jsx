import { Row, Col } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/story.css";
import StoryItem from "./StoryItem";
import { settings } from "./StorySlideConfig";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

const Story = ({ stories }) => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <Row>
          <Col offset={4} span={16} className="story-title">
            What alumni saying
          </Col>
        </Row>

        <Row>
          <Col
            span={16}
            sm={{ span: 20, offset: 2 }}
            xs={{ span: 22, offset: 1 }}
            offset={4}
          >
            <Slider {...settings}>
              {stories?.map((e) => (
                <StoryItem key={e.id} userStory={e} />
              ))}
            </Slider>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Story;

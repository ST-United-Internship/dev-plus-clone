import { Row, Col } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/story.css";
import StoryItem from "./StoryItem";
import { settings } from "./StorySlideConfig";

const Story = ({ stories }) => {
  return (
    <>
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
            {stories?.map((story) => (
              <StoryItem key={story.id} userStory={story} />
            ))}
          </Slider>
        </Col>
      </Row>
    </>
  );
};

export default Story;

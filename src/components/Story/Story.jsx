import { Row, Col } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/story.css";
import StoryItem from "./StoryItem";
import { settings } from "./StorySlideConfig";
import Container from "../container/Container";

const Story = ({ stories }) => {
  return (
    <>
      <Container>
        <p className="story-title">What alumni saying</p>
      </Container>

      <Row justify="center">
        <Col span={16}>
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

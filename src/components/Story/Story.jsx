import { Row, Col } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/story.css";
import StoryItem from "./StoryItem";
import { getUserStories } from "../../../api/devplus-api";
import { useQuery } from "@tanstack/react-query";
import { settings } from "./StorySlideConfig";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

const Story = () => {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => getUserStories(),
  });

  useEffect(() => {
    AOS.init();
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

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
              {data.map((e) => (
                <StoryItem key={e.id} userStory={e} />
              ))}
            </Slider>
          </Col>
          <div>{isFetching ? "Updating..." : ""}</div>
        </Row>
      </div>
    </>
  );
};

export default Story;

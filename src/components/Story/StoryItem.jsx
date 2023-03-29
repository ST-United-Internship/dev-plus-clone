import { Image } from "antd";
import "../../assets/css/story.css";

const StoryItem = ({ userStory }) => {
  return (
    <>
      <div className="story-container">
        <div className="story-info">
          <div className="desc">
            <Image
              width={66}
              src="https://devplus.edu.vn/assets/images/testimonial/style5/quote2.png"
            />
            <p className="story-item-desc">{userStory.bio}</p>

            <div className="desc-img">
              <Image
                width={70}
                height={70}
                src={userStory.image}
                className="item-img"
              />
            </div>
          </div>
        </div>

        <div className="user-info-container">
          <p className="username">{userStory.username}</p>
          <p className="dev-plus-member">Member DevPlus+</p>
        </div>
      </div>
    </>
  );
};

export default StoryItem;

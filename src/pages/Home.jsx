import HomeBanner from "../components/HomeBanner";
import Story from "../components/Story/Story";
import { useGetBanner } from "../hooks/useBanner";
import { useGetStories } from "../hooks/useGetStroies";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, easing: "ease", once: true });
  }, []);

  const { data: homeBannerData } = useGetBanner();

  const { data: stories } = useGetStories();

  return (
    <>
      <HomeBanner homeBannerData={homeBannerData} />
      <Story stories={stories} />
    </>
  );
};

export default Home;

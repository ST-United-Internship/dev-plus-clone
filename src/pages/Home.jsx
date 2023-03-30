import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HomeBanner from "../components/HomeBanner";
import { Loading } from "../components/Loading";
import Story from "../components/Story/Story";
import { useGetBanner } from "../hooks/useBanner";
import { useGetStories } from "../hooks/useGetStroies";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, easing: "ease", once: true });
  }, []);

  const { data: homeBannerData, isLoading: loadBanner } = useGetBanner();

  const { data: stories, isLoading: loadStories } = useGetStories();

  if (loadStories || loadBanner) return <Loading />;

  return (
    <>
      <HomeBanner homeBannerData={homeBannerData} />
      <Story stories={stories} />
    </>
  );
};

export default Home;

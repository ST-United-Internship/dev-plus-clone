import HomeBanner from "../components/HomeBanner";
import Story from "../components/Story/Story";
import { useGetBanner } from "../hooks/useBanner";
import { useGetStories } from "../hooks/useGetStroies";

const Home = () => {
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

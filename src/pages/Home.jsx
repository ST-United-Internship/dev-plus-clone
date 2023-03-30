import HomeBanner from "../components/HomeBanner";
import Story from "../components/Story/Story";
import { useGetBanner } from "../hooks/useBanner";
import { useGetStories } from "../hooks/useGetStroies";
import { useGetFooter } from "../hooks/useFooter";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import Footer from "../components/Footer";
import SkillGrid from "../components/SkillsGrid";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, easing: "ease", once: true });
  }, []);

  const { data: homeBannerData } = useGetBanner();

  const { data: stories } = useGetStories();

  const { data: footerData, isLoading: loadFooterData } = useGetFooter();

  return (
    <>
      <HomeBanner homeBannerData={homeBannerData} />
      <SkillGrid />
      <Story stories={stories} />
      {!loadFooterData && <Footer footerData={footerData} />}
    </>
  );
};

export default Home;

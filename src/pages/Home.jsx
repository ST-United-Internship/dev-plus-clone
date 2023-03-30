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
import { useGetCampus } from "../hooks/useCampus";
import { Campus } from "../components/Campus";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, easing: "ease", once: true });
  }, []);

  const { data: homeBannerData } = useGetBanner();

  const { data: campusData, isLoading: loadCampusData } = useGetCampus();

  const { data: stories } = useGetStories();

  const { data: footerData, isLoading: loadFooterData } = useGetFooter();

  return (
    <>
      <HomeBanner homeBannerData={homeBannerData} />
      <SkillGrid />
      {!loadCampusData && <Campus campusData={campusData} />}
      <Story stories={stories} />
      {!loadFooterData && <Footer footerData={footerData} />}
    </>
  );
};

export default Home;

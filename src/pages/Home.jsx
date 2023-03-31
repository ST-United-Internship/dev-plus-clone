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
import { Loading } from "../components/Loading";
import { useGetAboutRoad } from "../hooks/useGetAboutRoad";
import { AboutRoad } from "../components/AboutRoad";
import { useGetCampus } from "../hooks/useCampus";
import { Campus } from "../components/Campus";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, easing: "ease", once: true });
  }, []);

  const { data: homeBannerData, isLoading: loadBanner } = useGetBanner();

  const { data: campusData, isLoading: loadCampusData } = useGetCampus();

  const { data: stories, isLoading: loadStories } = useGetStories();

  const { data: footerData, isLoading: loadFooterData } = useGetFooter();

  const { data: aboutRoadData, isLoading: loadAboutRoad } = useGetAboutRoad();

  if (
    loadStories ||
    loadBanner ||
    loadFooterData ||
    loadAboutRoad ||
    loadCampusData
  )
    return <Loading />;

  return (
    <>
      <HomeBanner homeBannerData={homeBannerData} />
      <AboutRoad aboutRoadData={aboutRoadData} />
      <SkillGrid />
      <Campus campusData={campusData} />
      <Story stories={stories} />
      <Footer footerData={footerData} />
    </>
  );
};

export default Home;

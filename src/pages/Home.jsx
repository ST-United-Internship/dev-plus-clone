import HomeBanner from "../components/HomeBanner";
import Story from "../components/Story/Story";
import Admin from "../components/Admin";
import Faq from "../components/Faq";
import { useGetBanner } from "../hooks/useBanner";
import { useGetStories } from "../hooks/useGetStroies";
import { useGetFooter } from "../hooks/useFooter";
import { useGetAdmin } from "../hooks/useAdmin";
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
import { useGetSkills } from "../hooks/useGetSkills";
import { useGetConserns } from "../hooks/useGetConcerns";
import { Headernav } from "../components/headernav";
import { useGetGalleries } from "../hooks/useGetGalleries";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, easing: "ease", once: true });
  }, []);

  const { data: homeBannerData, isLoading: loadBanner } = useGetBanner();

  const { data: campusData, isLoading: loadCampusData } = useGetCampus();

  const { data: stories, isLoading: loadStories } = useGetStories();

  const { data: footerData, isLoading: loadFooterData } = useGetFooter();

  const { data: admin, isLoading: loadAdmin } = useGetAdmin();

  const { data: skills, isLoading: loadSkills } = useGetSkills();

  const { data: aboutRoadData, isLoading: loadAboutRoad } = useGetAboutRoad();

  const { data: concerns, isLoading: loadConcerns } = useGetConserns();

  const { data: galleries, isLoading: loadGalleries } = useGetGalleries();

  if (
    loadStories ||
    loadBanner ||
    loadFooterData ||
    loadAboutRoad ||
    loadCampusData ||
    loadAdmin ||
    loadSkills ||
    loadConcerns ||
    loadGalleries
  )
    return <Loading />;

  return (
    <>
      <Headernav galleries={galleries} />
      <HomeBanner homeBannerData={homeBannerData} />
      <AboutRoad aboutRoadData={aboutRoadData} />
      <SkillGrid skills={skills} />
      <Campus campusData={campusData} />
      <Admin admin={admin} />
      <Faq concerns={concerns} />
      <Story stories={stories} />
      <Footer footerData={footerData} />
    </>
  );
};

export default Home;

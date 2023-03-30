import HomeBanner from "../components/HomeBanner";
import Story from "../components/Story/Story";
import Admin from "../components/Admin";
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

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, easing: "ease", once: true });
  }, []);

  const { data: homeBannerData, isLoading: loadBanner } = useGetBanner();

<<<<<<< HEAD
  const { data: campusData, isLoading: loadCampusData } = useGetCampus();

  const { data: stories, isLoading: loadStories } = useGetStories();

  const { data: footerData, isLoading: loadFooterData } = useGetFooter();

  const { data: admin, isLoading: loadAdmin } = useGetAdmin();

  const { data: aboutRoadData, isLoading: loadAboutRoad } = useGetAboutRoad();

  if (
    loadStories ||
    loadBanner ||
    loadFooterData ||
    loadAboutRoad ||
    loadCampusData ||
    loadAdmin
  )
    return <Loading />;
=======
  const { data: footerData, isLoading: loadFooterData } = useGetFooter();

  const { data: admin } = useGetAdmin();
>>>>>>> 7ab2047 (feat: admin ui)

  const { data: stories } = useGetStories();

  return (
    <>
      <HomeBanner homeBannerData={homeBannerData} />
      <AboutRoad aboutRoadData={aboutRoadData} />
      <SkillGrid />
<<<<<<< HEAD
      <Campus campusData={campusData} />
      <Admin admin={admin} />
      <Story stories={stories} />
      <Footer footerData={footerData} />
=======
      <Admin admin={admin} />
      <Story stories={stories} />
      {!loadFooterData && <Footer footerData={footerData} />}
>>>>>>> 7ab2047 (feat: admin ui)
    </>
  );
};

export default Home;

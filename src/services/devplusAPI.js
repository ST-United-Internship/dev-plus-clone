import axios from "axios";
import { API_URL } from "../constant/url";

export const getHomeBannerAPI = () => {
  return axios.get(API_URL.BANNER);
};

export const getCampusAPI = () => {
  return axios.get(API_URL.CAMPUS);
};

export const getStoriesAPI = () => {
  return axios.get(API_URL.STORIES);
};

export const getFooterAPI = () => {
  return axios.get(API_URL.FOOTER);
};

<<<<<<< HEAD
export const getAboutRoadAPI = () => {
  return axios.get(API_URL.ABOUTROAD);
};

=======
>>>>>>> 27c598d (fix: fix style skill grid ui and admin ui)
export const getAdminAPI = () => {
  return axios.get(API_URL.ADMIN);
};

export const getSkillsAPI = () => {
  return axios.get(API_URL.SKILLS);
};

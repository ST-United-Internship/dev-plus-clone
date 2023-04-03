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

export const getAboutRoadAPI = () => {
  return axios.get(API_URL.ABOUTROAD);
};

export const getAdminAPI = () => {
  return axios.get(API_URL.ADMIN);
};

export const getSkillsAPI = () => {
  return axios.get(API_URL.SKILLS);
};

export const getConserns = () => {
  return axios.get(API_URL.CONCERNS);
};

export const getGalleriesAPI = () => {
  return axios.get(API_URL.GALLERIES);
};

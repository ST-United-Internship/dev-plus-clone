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

import axios from "axios";
import { API_URL } from "../constant/url";

export const getHomeBannerAPI = () => {
  return axios.get(API_URL.BANNER);
};

export const getStoriesAPI = () => {
  return axios.get(API_URL.STORIES);
};

export const getAboutRoadAPI = () => {
  return axios.get(API_URL.ABOUTROAD);
};

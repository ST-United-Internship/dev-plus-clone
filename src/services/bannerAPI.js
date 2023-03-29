import axios from "axios";
import { API_URL } from "../constant/url";

export const getHomeBannerAPI = () => {
  return axios.get(API_URL.BANNER);
};

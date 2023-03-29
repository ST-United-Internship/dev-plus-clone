import axios from "axios";
import { API_URL } from "../constant/url";

export const getHomeBannerAPI = () => {
  console.log(API_URL.BANNER);
  return axios.get(API_URL.BANNER);
};

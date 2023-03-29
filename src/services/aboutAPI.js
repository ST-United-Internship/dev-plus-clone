import axios from "axios";
import { API_URL } from "../constant/url";

export const getAboutAPI = () => {
  return axios.get(API_URL.ABOUT);
};

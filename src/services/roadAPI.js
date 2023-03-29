import axios from "axios";
import { API_URL } from "../constant/url";

export const getRoadAPI = () => {
  return axios.get(API_URL.ROAD);
};

import axios from "axios";
import { API_URL } from "../constant/url";

export const getCampusAPI = () => {
  return axios.get(API_URL.CAMPUS);
};

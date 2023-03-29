import { useQuery } from "react-query";
import { QUERY_KEY } from "../constant/query-key";
import { getAboutAPI } from "../services/aboutAPI";

export const useAbout = () =>
  useQuery([QUERY_KEY.ABOUT], async () => {
    const { data } = await getAboutAPI();
    return data;
  });

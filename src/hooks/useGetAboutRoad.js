import { useQuery } from "react-query";
import { QUERY_KEY } from "../constant/query-key";
import { getAboutRoadAPI } from "../services/devplusAPI";

export const useGetAboutRoad = () =>
  useQuery([QUERY_KEY.ABOUTROAD], async () => {
    const { data } = await getAboutRoadAPI();
    return data;
  });

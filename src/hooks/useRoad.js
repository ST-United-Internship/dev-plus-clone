import { useQuery } from "react-query";
import { QUERY_KEY } from "../constant/query-key";
import { getRoadAPI } from "../services/roadAPI";

export const useRoad = () =>
  useQuery([QUERY_KEY.ROAD], async () => {
    const { data } = await getRoadAPI();
    return data;
  });

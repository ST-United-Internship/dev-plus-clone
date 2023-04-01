import { useQuery } from "react-query";
import { QUERY_KEY } from "../constant/query-key";
import { getCampusAPI } from "../services/devplusAPI";

export const useGetCampus = () =>
  useQuery([QUERY_KEY.CAMPUS], async () => {
    const { data } = await getCampusAPI();
    return data;
  });

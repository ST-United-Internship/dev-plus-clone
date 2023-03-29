import { useQuery } from "react-query";
import { QUERY_KEY } from "../constant/query-key";
import { getCampusAPI } from "../services/campusAPI";

export const useCampus = () =>
  useQuery([QUERY_KEY.BANNER], async () => {
    const { data } = await getCampusAPI();
    return data;
  });

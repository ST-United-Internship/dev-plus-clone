import { useQuery } from "react-query";
import { QUERY_KEY } from "../constant/query-key";
import { getConserns } from "../services/devplusAPI";

export const useGetConserns = () =>
  useQuery([QUERY_KEY.CONCERNS], async () => {
    const { data } = await getConserns();
    return data;
  });

import { useQuery } from "react-query";
import { QUERY_KEY } from "../constant/query-key";
import { getAdminAPI } from "../services/devplusAPI";

export const useGetAdmin = () =>
  useQuery([QUERY_KEY.ADMIN], async () => {
    const { data } = await getAdminAPI();
    return data;
  });

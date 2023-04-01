import { useQuery } from "react-query";
import { QUERY_KEY } from "../constant/query-key";
import { getFooterAPI } from "../services/devplusAPI";

export const useGetFooter = () =>
  useQuery([QUERY_KEY.FOOTER], async () => {
    const { data } = await getFooterAPI();
    return data;
  });

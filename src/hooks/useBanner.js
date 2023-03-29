import { useQuery } from "react-query";
import { QUERY_KEY } from "../constant/query-key";
import { getHomeBannerAPI } from "../services/devplusAPI";

export const useGetBanner = () =>
  useQuery([QUERY_KEY.BANNER], async () => {
    const { data } = await getHomeBannerAPI();
    return data;
  });

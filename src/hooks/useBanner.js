import { useQuery } from "react-query";
import { QUERY_KEY } from "../constant/query-key";
import { getHomeBannerAPI } from "../services/bannerAPI";

export const useGetBanner = () =>
  useQuery([QUERY_KEY.BANNER], async () => {
    const { data } = await getHomeBannerAPI();
    return data;
  });

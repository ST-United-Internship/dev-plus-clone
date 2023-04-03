import { useQuery } from "react-query";
import { QUERY_KEY } from "../constant/query-key";
import { getGalleriesAPI } from "../services/devplusAPI";

export const useGetGalleries = () =>
  useQuery([QUERY_KEY.GALLERIES], async () => {
    const { data } = await getGalleriesAPI();
    return data;
  });

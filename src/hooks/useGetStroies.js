import { useQuery } from "react-query";
import { QUERY_KEY } from "../constant/query-key";
import { getStoriesAPI } from "../services/devplusAPI";

export const useGetStories = () =>
  useQuery([QUERY_KEY.STORIES], async () => {
    const { data } = await getStoriesAPI();
    return data;
  });

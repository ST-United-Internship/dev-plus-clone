import { useQuery } from "react-query";
import { QUERY_KEY } from "../constant/query-key";
import { getSkillsAPI } from "../services/devplusAPI";

export const useGetSkills = () =>
  useQuery([QUERY_KEY.SKILLS], async () => {
    const { data } = await getSkillsAPI();
    return data;
  });

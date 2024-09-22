import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface PostSummary {
  title: string;
  slug: string;
  date: string;
  imageUrl: string;
  spoilerText: string;
}

const url =
  "list";

const fn = async () => {
  return axios.get(url).then((res) => {
    return res.data;
  });
};

export const useGetPostSummaries = () => {
  return useQuery<PostSummary[]>({
    queryKey: [url],
    queryFn: fn,
  });
};

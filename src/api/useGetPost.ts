import { useQuery } from "@tanstack/react-query";
import axios from "axios";
interface Post {
  title: string;
  slug: string;
  date: string;
  imageUrl: string;
  content: string;
}

const url = "post";

const fn = async (slug: string) => {
  return axios.get(`${url}/${slug}`).then((res) => {
    return res.data;
  });
};

export const useGetPost = (slug: string) => {
  return useQuery<Post, string>({
    queryKey: [url, slug],
    queryFn: fn.bind(this, slug),
  });
};

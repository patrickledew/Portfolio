import { useQuery } from "@tanstack/react-query";

interface PostSummary {
  title: string;
  slug: string;
  date: string;
  imageUrl: string;
  spoilerText: string;
}

const url =
  "https://stbmxs6pk0.execute-api.us-east-1.amazonaws.com/default/portfolio-blog-api/list";

const fn = async () => {
  return fetch(url).then((res) => {
    return res.json();
  });
};

export const useGetPostSummaries = () => {
  return useQuery<PostSummary[]>({
    queryKey: [url],
    queryFn: fn,
  });
};

import { useQuery } from "@tanstack/react-query";

interface Post {
  title: string;
  slug: string;
  date: string;
  imageUrl: string;
  content: string;
}

const url =
  "https://stbmxs6pk0.execute-api.us-east-1.amazonaws.com/default/portfolio-blog-api/post";

const fn = async (slug: string) => {
  return fetch(`${url}/${slug}`).then((res) => {
    return res.json();
  });
};

export const useGetPost = (slug: string) => {
  return useQuery<Post, string>({
    queryKey: [url, slug],
    queryFn: fn.bind(this, slug),
  });
};

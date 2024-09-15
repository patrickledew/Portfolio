import { Link, useParams } from "@tanstack/react-router";
import { useGetPost } from "../api/useGetPost";
import "./BlogPost.scss";
import "../styles/util.scss";
import Markdown from "react-markdown";
export const BlogPost = () => {
  const { slug } = useParams({ strict: false });
  const { data: post, isLoading } = useGetPost(slug ?? "");
  return (
    <div id="content" className="blog-post">
      <div className="pane nopad">
        <Link to="/" hash="blog" className="back">
          Back
        </Link>
        <div
          className="post-image"
          style={{
            backgroundImage: `url('${post?.imageUrl}')`,
          }}
        ></div>
        <div className="post-content">
          <h1>{post?.title}</h1>

          <Markdown>{post?.content}</Markdown>
        </div>
      </div>
    </div>
  );
};

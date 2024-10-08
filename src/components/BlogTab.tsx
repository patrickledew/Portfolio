import "./BlogTab.scss";
import { useGetPostSummaries } from "../api/useGetPostSummaries";
import { LoadingIndicator } from "./LoadingIndicator";
import { Link } from "@tanstack/react-router";
import Markdown from "react-markdown";

export const BlogTab = () => {
  const { data: posts, isLoading } = useGetPostSummaries();

  return (
    <div className="blog-tab nopadtab">
      {isLoading || !posts ? (
        <LoadingIndicator />
      ) : (
        posts.map((post) => (
          <div className="post-container">
            <div
              className="post-image"
              style={
                post.imageUrl !== undefined
                  ? {
                      backgroundImage: `url("${post.imageUrl}")`,
                    }
                  : {}
              }
            ></div>
            <div className="post-content">
              <h3>{post.title}</h3>
              <p><Markdown>{post.spoilerText}</Markdown></p>
              <Link to={`/blog/${post.slug}`}>View Post</Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

import "./BlogTab.scss";
import { useGetPostSummaries } from "../api/useGetPostSummaries";

export const BlogTab = () => {
  const { data: posts, isLoading } = useGetPostSummaries();

  return (
    <div className="blog-tab nopadtab" id="blog">
      {isLoading || !posts ? (
        <div className="loading-indicator">Loading...</div>
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
              <p>{post.spoilerText}</p>
              <a href={`/blog/${post.slug}`}>View Post</a>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

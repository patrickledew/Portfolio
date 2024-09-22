import { Link, useParams } from "@tanstack/react-router";
import { useGetPost } from "../api/useGetPost";
import "./BlogPost.scss";
import "../styles/util.scss";
import Markdown from "react-markdown";
import { LoadingIndicator } from "../components/LoadingIndicator";
export const BlogPost = () => {
  const { slug } = useParams({ strict: false });
  const { data: post, isLoading } = useGetPost(slug ?? "");
  return (
    <div id="content" className="blog-post">
      <div className="pane nopad">
        <Link to="/" hash="blog" className="back">
          Back
        </Link>
        {isLoading ? (
          <LoadingIndicator loadingText="Grabbing post" />
        ) : (
          <div>
            <div
              className="post-image"
              style={{
                backgroundImage: `url('${post?.imageUrl}')`,
              }}
            ></div>

            <div className="post-content">
              <div className="about-section">
                <div>
                  Author: <strong>Patrick LeDew</strong>
                </div>
                <div>
                  Published:{" "}
                  <strong>
                    {post ? new Date(post.date).toLocaleDateString() : ""}
                  </strong>
                </div>
              </div>
              <h1>{post?.title}</h1>

              <Markdown>{post?.content}</Markdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

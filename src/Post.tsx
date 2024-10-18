import React from "react";
import { useDeletePostMutation, useGetPostsQuery } from "./apiSlice";

const PostList: React.FC = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery("");
  const [deletePost] = useDeletePostMutation();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts!</div>;

  return (
    <div>
      <h1>Posts</h1>
      {posts?.map((post: any) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            marginBottom: "8px",
            padding: "8px",
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;

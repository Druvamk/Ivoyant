import React, { useState } from "react";
import { useUpdatePostMutation } from "./apiSlice";

const UpdatePost: React.FC<{ postId: number }> = ({ postId }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [updatePost] = useUpdatePostMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updatePost({ id: postId, title, body });
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Post</h2>
      <div>
        <input
          type="text"
          value={title}
          placeholder="New Title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <textarea
          value={body}
          placeholder="New Body"
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button type="submit">Update Post</button>
    </form>
  );
};

export default UpdatePost;

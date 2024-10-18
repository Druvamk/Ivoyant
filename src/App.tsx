// src/App.tsx
import React from "react";
import CreatePost from "./Create";
import PostList from "./Post";
import UpdatePost from "./Update";

const App: React.FC = () => {
  return (
    <div>
      <CreatePost />
      <PostList />
      <UpdatePost postId={1} />
    </div>
  );
};

export default App;

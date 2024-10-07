import React from "react";
import Heading from "./components/Heading";
import Todolist from "./components/Todolist";

const App: React.FC = () => {
  return (
    <div className="container py-16 px-6 min-h-screen mx-auto">
      <Heading />
      <Todolist />
    </div>
  );
};

export default App;

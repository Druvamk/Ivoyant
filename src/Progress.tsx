import React from "react";

export default function Progress() {
  const [input, setInput] = React.useState("");

  return (
    <>
      <h3>Disable Button Challenge</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button disabled={input.length === 0 && true}>Search</button>
    </>
  );
}

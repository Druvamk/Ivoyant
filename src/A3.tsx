import React from "react";

function A3({ incrementCount }: { incrementCount: () => void }) {
  console.log("A3 loaded");
  return (
    <div>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}
export default React.memo(A3);

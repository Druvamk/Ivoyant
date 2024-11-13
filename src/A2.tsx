import React from "react";

function A2({ incrementSalary }: { incrementSalary: () => void }) {
  console.log("A2 loaded");
  return (
    <div>
      <button onClick={incrementSalary}>Increment Salary</button>
    </div>
  );
}
export default React.memo(A2);

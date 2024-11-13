import React from "react";

function A1() {
  console.log("Title A1");
  return <div>Title A1</div>;
}
export default React.memo(A1);

import { Button } from "antd";
import { CSSProperties } from "react";

function A5(): JSX.Element {
  const flexStyle: CSSProperties = {
    width: "100%",
    height: "50vh",
    border: "1px solid #0f0",
  };

  return (
    <div>
      <div style={flexStyle}>
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Button type="default">Secondary button</Button>
          <Button type="primary">Primary button</Button>
          <Button type="primary">Primary button</Button>
          <Button type="primary">Primary button</Button>
          <Button type="primary">Primary button</Button>
          <Button type="primary">Primary button</Button>
          <Button type="primary">Primary button</Button>
        </div>
      </div>
    </div>
  );
}

export default A5;

import { CSSProperties } from "react";

type stylesProps = {
  style: CSSProperties;
};

export default function Styles(props: stylesProps) {
  return (
    <div>
      <p style={props.style}>vdvrrdgver</p>
    </div>
  );
}

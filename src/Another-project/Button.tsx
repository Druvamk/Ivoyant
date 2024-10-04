import { ComponentPropsWithoutRef } from "react";

type buttonProps = {
  type: "submit";
} & ComponentPropsWithoutRef<"button">;
type AchorProps = {
  type: "achor";
} & ComponentPropsWithoutRef<"a">;

export default function Button(props: buttonProps | AchorProps) {
  console.log(props, { ...props });
  if (props.type === "achor") {
    return <a {...props}>vsdv</a>;
  }
  return (
    <div>
      <button {...props}>add</button>
    </div>
  );
}

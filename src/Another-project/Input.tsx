import { ChangeEvent } from "react";

type inputprops = {
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input(props: inputprops) {
  return (
    <div>
      <input type="text" value={props.value} onChange={props.handleChange} />
    </div>
  );
}

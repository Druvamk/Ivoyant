import { Select } from "antd";
import { SelectProps } from "antd/es/select";

const myData: SelectProps["options"] = [
  {
    value: "black",
    label: "Black",
  },
  {
    value: "blue",
    label: "Blue",
  },
  {
    value: "Green",
    label: "Green",
  },
  {
    value: "purple",
    label: "Purple",
  },
];

function A4(): JSX.Element {
  function handleChange(value: string | string[]): void {
    console.log(value);
  }

  return (
    <div>
      <Select
        style={{ width: 220 }}
        placeholder="Select the option"
        options={myData}
        showSearch
        allowClear
        autoFocus
        mode="multiple"
        maxTagCount={2}
        onChange={handleChange}
        onSelect={handleChange}
        status="warning" // Can be "success", "warning", or "error"
      />
    </div>
  );
}

export default A4;

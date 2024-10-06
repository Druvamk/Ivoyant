import { DatePicker, Progress } from "antd";
import { RangePickerProps } from "antd/es/date-picker";

function A6(): JSX.Element {
  return (
    <div>
      <DatePicker />
      <DatePicker.RangePicker allowClear />
      <Progress type="circle" percent={50} />
    </div>
  );
}

export default A6;

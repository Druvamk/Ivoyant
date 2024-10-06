import { Divider, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

function A3(): JSX.Element {
  return (
    <div>
      <Input.Search
        type="number" // Can be "text" or "password"
        maxLength={5}
        placeholder="Enter your number"
        allowClear
        size="middle" // Can be "large", "middle", or "small"
        status="warning" // Can be "default", "success", "warning", or "error"
      />
      <Divider />
      <Input.Search type="text" addonBefore="https://" />
      <TextArea rows={4} maxLength={4} />
    </div>
  );
}

export default A3;

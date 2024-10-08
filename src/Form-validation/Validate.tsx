import { Form } from "antd";
import Input from "rc-input";

export default function Validate() {
  return (
    <div>
      <Form name="User-form" layout="vertical" autoComplete="off">
        <Form.Item
          name="username"
          rules={[
            { required: true, message: "Please input your username!" },
            { min: 5, message: "Username must be at least 5 characters long!" },
          ]}
        >
          <Input placeholder="Enter the Username" />
        </Form.Item>
        <Form.Item
          name={"email"}
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="Enter the Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input placeholder="Enter the Password" />
        </Form.Item>
        <Form.Item>
          <button type="submit">Submit</button>
        </Form.Item>
      </Form>
    </div>
  );
}

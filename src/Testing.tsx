import React, { useState } from "react";
import { Form, Input, Progress, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const EasyPasswordForm: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [strength, setStrength] = useState<number>(0);
  const [status, setStatus] = useState<string>("Poor");

  // Function to calculate password strength
  const calculateStrength = (password: string): number => {
    let strengthScore = 0;
    if (password.length >= 6) strengthScore += 1; // Length check
    if (/[A-Z]/.test(password)) strengthScore += 1; // Uppercase letter
    if (/[a-z]/.test(password)) strengthScore += 1; // Lowercase letter
    if (/[0-9]/.test(password)) strengthScore += 1; // Number check
    if (/[^A-Za-z0-9]/.test(password)) strengthScore += 1; // Special character

    return strengthScore;
  };

  // Update password and strength
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    const score = calculateStrength(value);
    setStrength(score * 20); // Scale from 0 to 100
    if (score <= 1) setStatus("Poor");
    else if (score <= 3) setStatus("Medium");
    else setStatus("Strong");
  };

  // Form submission (just a placeholder function)
  const onFinish = (values: any) => {
    console.log("Form submitted:", values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: "300px" }}>
      {/* Password Field */}
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          placeholder="Enter your password"
          onChange={handlePasswordChange}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>

      {/* Password Strength Indicator */}
      <Progress
        percent={strength}
        showInfo={false}
        strokeColor={strength < 40 ? "red" : strength < 80 ? "orange" : "green"}
        style={{ marginBottom: "10px" }}
      />
      <span
        style={{
          color: strength < 40 ? "red" : strength < 80 ? "orange" : "green",
        }}
      >
        {status}
      </span>

      {/* Submit Button */}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EasyPasswordForm;

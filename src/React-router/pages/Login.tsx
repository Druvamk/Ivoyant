import React, { useState } from "react";
import { Form, Input, Button, Typography } from "antd";

const { Title } = Typography;

interface FormData {
  name: string;
  email: string;
  password: string;
}

interface Errors {
  errorName?: string;
  errorEmail?: string;
  errorPassword?: string;
}

const Login: React.FC = () => {
  const [totalData, setTotalData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (e: React.FormEvent) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let newErrors: Errors = {};

    if (!totalData.email.trim()) {
      newErrors.errorEmail = "Email is required";
    } else if (!emailRegex.test(totalData.email)) {
      newErrors.errorEmail = "Enter a valid Email";
    }

    if (!totalData.name.trim()) {
      newErrors.errorName = "Name is required";
    }

    if (!totalData.password.trim()) {
      newErrors.errorPassword = "Password is required";
    }

    setErrors(newErrors);

    if (
      !newErrors.errorName &&
      !newErrors.errorEmail &&
      !newErrors.errorPassword
    ) {
      alert("Form submitted");
      setTotalData({ name: "", email: "", password: "" });
      setErrors({});
    }
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "auto",
        padding: "40px",
        background: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Title level={2} style={{ textAlign: "center" }}>
        Form Validation
      </Title>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="Name"
          validateStatus={errors.errorName ? "error" : ""}
          help={errors.errorName}
        >
          <Input
            type="text"
            value={totalData.name}
            onChange={(e) =>
              setTotalData({ ...totalData, name: e.target.value })
            }
            placeholder="Enter your name"
          />
        </Form.Item>

        <Form.Item
          label="Email"
          validateStatus={errors.errorEmail ? "error" : ""}
          help={errors.errorEmail}
        >
          <Input
            type="text"
            value={totalData.email}
            onChange={(e) =>
              setTotalData({ ...totalData, email: e.target.value })
            }
            placeholder="Enter your email"
          />
        </Form.Item>

        <Form.Item
          label="Password"
          validateStatus={errors.errorPassword ? "error" : ""}
          help={errors.errorPassword}
        >
          <Input.Password
            value={totalData.password}
            onChange={(e) =>
              setTotalData({ ...totalData, password: e.target.value })
            }
            placeholder="Enter your password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;

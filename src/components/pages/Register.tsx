import { Button, Form, Input, Progress, Typography } from "antd";
import "./Register.scss";
import { Link } from "react-router-dom";
import SvgPhoto from "../SvgPhoto";
import { ChangeEvent, useState } from "react";
import { Container } from "../../cardsStyledComponents/Container.styled";
const { Title, Text, Link: AntdLink } = Typography;

export default function Register() {
  const [password, setPassword] = useState<string>("");
  const [strength, setStrength] = useState<number>(0);
  const [status, setStatus] = useState<string>("Poor");
  function calculateStrength(password: string): number {
    let numberStrength = 0;
    if (password.length >= 6) numberStrength += 1;
    if (/[A-Z]/.test(password)) numberStrength += 1;
    if (/[a-z]/.test(password)) numberStrength += 1;
    return numberStrength;
  }
  function handleChangePassword(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setPassword(value);
    const score = calculateStrength(value);
    setStrength(score * 20);
    if (score <= 1) setStatus("Poor");
    else if (score <= 3) setStatus("Medium");
    else if (score <= 5) setStatus("Strong");
  }
  function onFinish(value: {
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
  }) {
    if (
      !value.FirstName ||
      !value.LastName ||
      !value.Email ||
      !value.Password
    ) {
      return alert("Please fill out all the fields");
    }
    console.log("Form submitted:", value);
  }
  return (
    <>
      <div className="Register">
        <div
          style={{
            textAlign: "left",
            position: "absolute",
            top: "20px",
            left: "20px",
          }}
        >
          <SvgPhoto />
        </div>
        <div className="Register-form">
          <Form
            layout="vertical"
            className="form-login"
            style={{
              width: "400px",
              height: "500px",
            }}
            onFinish={onFinish}
          >
            <Container>
              <div>
                <Title level={4}>Registeration Form</Title>
              </div>
              <div>
                <Link to="/">Already have an account?</Link>
              </div>
            </Container>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Form.Item label="First Name" name="FirstName">
                <Input
                  placeholder="Username"
                  style={{ width: "100%", height: "40px" }}
                />
              </Form.Item>
              <Form.Item label="Last Name" name="LastName">
                <Input
                  placeholder="Last name"
                  style={{ width: "100%", height: "40px" }}
                />
              </Form.Item>
            </div>
            <div>
              <Form.Item label="Company" name="Company">
                <Input
                  placeholder="Demo Inc."
                  style={{ width: "100%", height: "40px" }}
                />
              </Form.Item>
            </div>
            <div>
              <Form.Item label="Email Address" name="email">
                <Input
                  placeholder="demo@company.com"
                  style={{ width: "100%", height: "40px" }}
                />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                label="Password"
                name="password"
                rules={[{ message: "Please input your password!" }]}
              >
                <Input.Password
                  placeholder="Enter the password"
                  onChange={handleChangePassword}
                  style={{ width: "100%", height: "40px" }}
                />
              </Form.Item>
            </div>
            <div>
              <Progress
                percent={strength}
                showInfo={false}
                strokeColor={
                  strength < 40 ? "red" : strength < 80 ? "orange" : "green"
                }
                style={{ marginBottom: "10px" }}
              />
              <span
                style={{
                  color:
                    strength < 40 ? "red" : strength < 80 ? "orange" : "green",
                }}
              >
                {status}
              </span>
            </div>
            <div>
              <Text
                type="secondary"
                style={{ fontSize: "12px", marginTop: "5px" }}
              >
                By signing up, you agree to our
                <AntdLink> Terms of services </AntdLink>
                and <AntdLink> Privancy Policy</AntdLink>
              </Text>
            </div>
            <div style={{ marginTop: "20px" }}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%", height: "40px" }}
                >
                  Create Account
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

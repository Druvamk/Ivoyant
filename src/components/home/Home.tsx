import {
  Button,
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Space,
  Typography,
} from "antd";
import "./Home.css";
import {
  FireOutlined,
  LockOutlined,
  CloudOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import SvgPhoto from "../SvgPhoto";
import { Link } from "react-router-dom";
const { Title, Text, Link: AntdLink } = Typography;
export default function Home() {
  return (
    <>
      <div className="home">
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
        <div className="login-form">
          <Form
            layout="vertical"
            style={{
              width: "400px",
              height: "500px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <Title level={2}>Login</Title>
              </div>
              <div>
                <AntdLink href="/register">Don't have an account?</AntdLink>
              </div>
            </div>
            <div>
              <Form.Item label="Email" name="Email">
                <Input
                  placeholder="Username"
                  style={{ width: "100%", height: "40px" }}
                />
              </Form.Item>
            </div>
            <div>
              <Form.Item label="Password" name="password">
                <Input.Password
                  placeholder="Password"
                  style={{ width: "100%", height: "40px" }}
                />
              </Form.Item>
            </div>
            <div>
              <Row justify="space-between" align="middle">
                <Col>
                  <Checkbox>Keep me signed in</Checkbox>
                </Col>
                <Col>
                  <AntdLink href="#" style={{ fontSize: "14px" }}>
                    Forgot Password?
                  </AntdLink>
                </Col>
              </Row>
            </div>
            <div style={{ marginTop: "20px" }}>
              <Form.Item>
                <Link to="/dashboard">
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%", height: "40px" }}
                  >
                    Login
                  </Button>
                </Link>
              </Form.Item>
            </div>
          </Form>
        </div>
        <div>
          <Divider plain>
            <Text>check other login views</Text>
          </Divider>
        </div>
        <div>
          <Space size="middle">
            <Button
              icon={<FireOutlined style={{ color: "red" }} />}
              shape="default"
              style={{ display: "flex", alignItems: "center" }}
            >
              Firebase
            </Button>
            <Button
              icon={<LockOutlined style={{ color: "green" }} />}
              shape="default"
              style={{ display: "flex", alignItems: "center" }}
            >
              Auth0
            </Button>
            <Button
              icon={<CloudOutlined style={{ color: "blue" }} />}
              shape="default"
              style={{ display: "flex", alignItems: "center" }}
            >
              AWS
            </Button>
            <Button
              icon={<ThunderboltOutlined style={{ color: "purple" }} />}
              shape="default"
              style={{ display: "flex", alignItems: "center" }}
            >
              Supabase
            </Button>
          </Space>
        </div>
      </div>
      <div
        style={{
          marginTop: "10px",
          position: "absolute",
          bottom: "20px",
          left: "20px",
        }}
      >
        <div>
          <Text type="secondary">
            This site is protected by <AntdLink>Privacy Policys</AntdLink>
          </Text>
        </div>
      </div>
      <div
        style={{
          marginTop: "10px",
          position: "absolute",
          bottom: "20px",
          right: "20px",
          display: "flex",
          gap: "20px",
        }}
      >
        <div>
          <Text type="secondary">
            <AntdLink type="secondary">Terms and Conditions</AntdLink>
          </Text>
        </div>
        <div>
          <Text type="secondary">
            <AntdLink type="secondary">Privacy Policy</AntdLink>
          </Text>
        </div>
        <div>
          <Text type="secondary">
            <AntdLink type="secondary">CA Privacy Notice</AntdLink>
          </Text>
        </div>
      </div>
    </>
  );
}
import {
  CalendarOutlined,
  FileOutlined,
  RedditOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Typography } from "antd";
const { Title, Text } = Typography;
export default function BigColorCards() {
  return (
    <Row gutter={20} style={{ marginTop: "16px" }}>
      <Col span={8}>
        <Card
          style={{
            backgroundColor: "#90ee90",
            borderRadius: "8px",
            textAlign: "center",
            padding: "20px",
            position: "relative",
            height: "150px",
          }}
          bodyStyle={{ padding: "20px" }}
        >
          <CalendarOutlined
            style={{
              fontSize: "100px",
              color: "rgba(255, 255, 255, 0.3)",
              position: "absolute",
              left: "10px",
              bottom: "10px",
            }}
          />

          <Title level={2} style={{ color: "#fff", marginBottom: "8px" }}>
            1,658
          </Title>
          <Text style={{ color: "#fff" }}>Daily user</Text>
        </Card>
      </Col>
      <Col span={8}>
        <Card
          style={{
            backgroundColor: "#1890ff", // blue background
            borderRadius: "8px",
            height: "150px", // set height to ensure vertical alignment
            display: "flex", // use flexbox
            justifyContent: "center", // center horizontally
            alignItems: "center", // center vertically
            position: "relative",
          }}
          bodyStyle={{ padding: "0" }} // no padding needed
        >
          <FileOutlined
            style={{
              fontSize: "100px",
              color: "rgba(255, 255, 255, 0.3)",
              position: "absolute",
              left: "10px",
              bottom: "10px",
            }}
          />

          <div style={{ textAlign: "center" }}>
            <Title level={2} style={{ color: "#fff", marginBottom: "8px" }}>
              1K
            </Title>
            <Text style={{ color: "#fff", fontWeight: "500" }}>
              Daily page view
            </Text>
          </div>
        </Card>
      </Col>
      <Col span={8}>
        <Card
          style={{
            backgroundColor: "#a47a07",
            borderRadius: "8px",
            textAlign: "center",
            padding: "20px",
            position: "relative",
            height: "150px",
          }}
          bodyStyle={{ padding: "20px" }}
        >
          <RedditOutlined
            style={{
              fontSize: "100px",
              color: "rgba(255, 255, 255, 0.3)",
              position: "absolute",
              left: "10px",
              bottom: "10px",
            }}
          />

          <Title level={2} style={{ color: "#fff", marginBottom: "8px" }}>
            5,678
          </Title>
          <Text style={{ color: "#fff" }}>Last month visitor</Text>
        </Card>
      </Col>
    </Row>
  );
}

import {
  CalendarOutlined,
  FileOutlined,
  RedditOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Typography } from "antd";
import { marginTop } from "../../data";
const { Title, Text } = Typography;
export default function BigColorCards() {
  return (
    <Row gutter={20} style={marginTop}>
      <Col span={8}>
        <Card className="bg-[#40e150] rounded-[8px] h-[120px] flex justify-center items-center relative">
          <CalendarOutlined className="text-[100px] text-[rgba(255,255,255,0.3)] absolute left-[10px] bottom-[10px]" />

          <Title level={2} style={{ color: "#fff", marginBottom: "8px" }}>
            1,658
          </Title>
          <Text style={{ color: "#fff" }}>Daily user</Text>
        </Card>
      </Col>
      <Col span={8}>
        <Card className="bg-[#1890ff] rounded-[8px] h-[120px] flex justify-center items-center relative">
          <FileOutlined className="text-[100px] text-[rgba(255,255,255,0.3)] absolute left-[10px] bottom-[10px]" />

          <div style={{ textAlign: "center" }}>
            <Title level={2} style={{ color: "#fff", marginBottom: "8px" }}>
              1K
            </Title>
            <Text style={{ color: "#fff", marginBottom: "8px" }}>
              Daily page view
            </Text>
          </div>
        </Card>
      </Col>
      <Col span={8}>
        <Card className="bg-[#815a11] rounded-[8px] h-[120px] flex justify-center items-center relative">
          <RedditOutlined className="text-[100px] text-[rgba(255,255,255,0.3)] absolute left-[10px] bottom-[10px]" />

          <Title style={{ color: "#fff", marginBottom: "8px" }}>5,678</Title>
          <Text className="text-white">Last month visitor</Text>
        </Card>
      </Col>
    </Row>
  );
}

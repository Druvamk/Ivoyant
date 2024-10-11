import { Avatar, Card, Col, Row, Space, Table, Typography } from "antd";
import { userActivityData } from "../../../../data";
import Table1 from "./Table1";
const { Text } = Typography;
export default function DataCardRow3() {
  return (
    <Row gutter={24} style={{ marginTop: "20px" }}>
      <Col span={12}>
        <Space direction="vertical" size={16}>
          <Card
            title="Projects"
            extra={<a href="#">View all</a>}
            style={{ width: 600 }}
          >
            <Table1 />
          </Card>
        </Space>
      </Col>
      <Col span={12}>
        <Card
          title="User Activity"
          extra={<a href="#">View all</a>}
          style={{ width: 600 }}
        >
          {userActivityData.map((item, index) => (
            <Row align="middle" style={{ padding: "10px" }} key={index}>
              <Col>
                <Avatar src={item.src} size="large" />
              </Col>
              <Col style={{ paddingLeft: "10px" }}>
                <Text strong>John Deo</Text>
                <br />
                <Text type="secondary">Lorem Ipsum is simply dummy text.</Text>
              </Col>
              <Col style={{ marginLeft: "auto" }}>
                <Text type="secondary">{item.time}🕑</Text>
              </Col>
            </Row>
          ))}
        </Card>
      </Col>
    </Row>
  );
}

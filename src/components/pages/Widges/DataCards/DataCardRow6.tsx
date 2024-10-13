import { Avatar, Card, Col, Row, Space, Typography } from "antd";
import { teamMemberData, userActivityData } from "../../../../data";
const { Text } = Typography;
export default function DataCardRow6() {
  return (
    <Row gutter={24} style={{ marginTop: "20px" }}>
      <Col span={8}>
        <Space direction="vertical" size={16}>
          <Card
            title="Feeds"
            extra={<a href="#">View all</a>}
            style={{ width: 400 }}
          >
            {teamMemberData.map((item, index) => (
              <Row
                align="middle"
                style={{ padding: "10px", gap: "10px" }}
                key={index}
              >
                <Col>
                  <Avatar src={item.src} size="small" />
                </Col>
                <Col>
                  <Text strong>{item.follwers}</Text>
                  <br />
                  <Text type="secondary">{item.desc}</Text>
                </Col>
              </Row>
            ))}
          </Card>
        </Space>
      </Col>
      <Col span={8}>
        <Card
          title="User Activity"
          extra={<a href="#">View all</a>}
          style={{ width: 800 }}
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

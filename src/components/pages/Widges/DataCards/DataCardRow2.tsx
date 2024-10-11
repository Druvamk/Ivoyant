import { Avatar, Card, Col, Row, Space, Typography } from "antd";
import { teamMemberData, userActivityData } from "../../../../data";
const { Text } = Typography;
export default function DataCardRow2() {
  return (
    <Row gutter={24} style={{ marginTop: "20px" }}>
      <Col span={12}>
        <Space direction="vertical" size={16}>
          <Card
            title="Team Members"
            extra={<a href="#">View all</a>}
            style={{ width: 600 }}
          >
            {teamMemberData.map((item, index) => (
              <Row
                align="middle"
                style={{ padding: "10px", gap: "10px" }}
                key={index}
              >
                <Col>
                  <Text>{item.time}</Text>
                </Col>
                <Col>
                  <Avatar src={item.src} size="large" />
                </Col>
                <Col style={{ paddingLeft: "10px" }}>
                  <Text strong>{item.follwers}</Text>
                  <br />
                  <Text type="secondary">{item.desc}</Text>
                </Col>
              </Row>
            ))}
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
                <Text type="secondary">{}🕑</Text>
              </Col>
            </Row>
          ))}
        </Card>
      </Col>
    </Row>
  );
}

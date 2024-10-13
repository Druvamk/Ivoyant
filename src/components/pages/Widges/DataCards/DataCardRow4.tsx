import { Card, Col, Row, Space } from "antd";
import StepsData from "../steps/StepsData";
import Table3 from "./Table3";
export default function DataCardRow4() {
  return (
    <Row gutter={34} style={{ marginTop: "20px" }}>
      <Col span={8}>
        <Space direction="vertical" size={16}>
          <Card title="Tasks" extra={<a>View all</a>} style={{ width: 370 }}>
            <StepsData />
          </Card>
        </Space>
      </Col>
      <Col span={12}>
        <Card
          title="Application Sales"
          extra={<a href="#">View all</a>}
          style={{ width: 800 }}
        >
          <Table3 />
        </Card>
      </Col>
    </Row>
  );
}

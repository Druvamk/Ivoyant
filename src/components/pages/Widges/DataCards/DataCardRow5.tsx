import { Card, Col, Row } from "antd";
import Table4 from "./Table4";
import Youtube from "./Youtube";

export default function DataCardRow5() {
  return (
    <Row gutter={34} style={{ marginTop: "20px" }}>
      <Col span={16}>
        <Card title="Tasks" extra={<a>View all</a>} style={{ width: 800 }}>
          <Table4 />
        </Card>
      </Col>
      <Col span={8}>
        <Youtube />
      </Col>
    </Row>
  );
}

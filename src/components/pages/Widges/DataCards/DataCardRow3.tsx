import { Card, Col, Divider, Row, Space, Typography } from "antd";
import Table1 from "./Table1";
import Table2 from "./Table2";
const { Text, Title } = Typography;
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
          title={
            <>
              <div>Product Sales</div>
              <Divider />
              <div style={{ display: "flex", gap: "170px" }}>
                <div>
                  <Text type="secondary">Earning</Text> <br />
                  <Title style={{ fontSize: "20px" }}>20,569$</Title>
                </div>
                <div>
                  <Text type="secondary">Yesterday</Text> <br />
                  <Title style={{ fontSize: "20px" }}>580$</Title>
                </div>
                <div>
                  <Text type="secondary">This Week</Text> <br />
                  <Title style={{ fontSize: "20px" }}>5,789$</Title>
                </div>
              </div>
            </>
          }
          style={{ width: 600 }}
        >
          <Table2 />
        </Card>
      </Col>
    </Row>
  );
}

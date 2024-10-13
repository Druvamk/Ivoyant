import { Button, Col, Dropdown, Menu, Row, Typography } from "antd";
import { IncomeContainer } from "../../cardsStyledComponents/Container.styled";
import { CaretDownOutlined, DownloadOutlined } from "@ant-design/icons";
import { Line } from "@ant-design/charts";
const { Title, Text } = Typography;
const chartData = [
  { day: "Mon", value: 90 },
  { day: "Tue", value: 20 },
  { day: "Wed", value: 60 },
  { day: "Thu", value: 20 },
  { day: "Fri", value: 20 },
  { day: "Sat", value: 80 },
  { day: "Sun", value: 20 },
];
const lineConfig = {
  data: chartData,
  xField: "day",
  yField: "value",
  smooth: false,
  height: 300,
  area: { color: "#5B8FF9" },
};
const menu = (
  <Menu>
    <Menu.Item key="1">By Volume</Menu.Item>
    <Menu.Item key="2">By Value</Menu.Item>
  </Menu>
);
export default function IncomeGraph() {
  return (
    <IncomeContainer>
      <Title level={4}>Income Overview</Title>
      <Row gutter={[16, 16]} align="middle" justify="space-between">
        <Col>
          <Text type="danger" strong>
            <span style={{ fontSize: "18px" }}>&#9660; $1,12,900</span>
          </Text>
          <Text type="danger"> (45.67%)</Text>
          <div>
            <Text type="secondary">Compare to: 01 Dec 2021 - 08 Jan 2022</Text>
          </div>
        </Col>
        <Col>
          <Button.Group style={{ marginRight: "16px" }}>
            <Button>Week</Button>
            <Button>Month</Button>
          </Button.Group>
          <Dropdown overlay={menu}>
            <Button style={{ marginRight: "8px" }}>
              By Volume <CaretDownOutlined />
            </Button>
          </Dropdown>
          <Button icon={<DownloadOutlined />} />
        </Col>
      </Row>

      <Line {...lineConfig} />
    </IncomeContainer>
  );
}

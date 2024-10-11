import React from "react";
import { Typography, Button, Dropdown, Menu, Row, Col, List } from "antd";
import { DownloadOutlined, CaretDownOutlined } from "@ant-design/icons";
import { Line } from "@ant-design/charts";
import { IncomeContainer } from "../../cardsStyledComponents/Container.styled";

const { Text, Title } = Typography;

const menu = (
  <Menu>
    <Menu.Item key="1">By Volume</Menu.Item>
    <Menu.Item key="2">By Value</Menu.Item>
  </Menu>
);

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
  areaStyle: { fill: "l(270) 0:#ffffff 1:#d6e4ff" },
};

const pageViewsData = [
  {
    title: "Admin Home",
    url: "/demo/admin/index.html",
    views: 7755,
    percentage: "31.74%",
  },
  {
    title: "Form Elements",
    url: "/demo/admin/forms.html",
    views: 5215,
    percentage: "28.53%",
  },
  {
    title: "Utilities",
    url: "/demo/admin/util.html",
    views: 4848,
    percentage: "25.35%",
  },
  {
    title: "Form Validation",
    url: "/demo/admin/validation.html",
    views: 3275,
    percentage: "23.17%",
  },
  {
    title: "Modals",
    url: "/demo/admin/modals.html",
    views: 3003,
    percentage: "22.21%",
  },
];

const IncomeGropGraph: React.FC = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={16}>
        <IncomeContainer>
          <Title level={4}>Income Overview</Title>
          <Row gutter={[16, 16]} align="middle" justify="space-between">
            <Col>
              <Text type="danger" strong>
                <span style={{ fontSize: "18px" }}>&#9660; $1,12,900</span>
              </Text>
              <Text type="danger"> (45.67%)</Text>
              <div>
                <Text type="secondary">
                  Compare to: 01 Dec 2021 - 08 Jan 2022
                </Text>
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
      </Col>

      {/* Right Side: Page Views */}
      <Col span={8}>
        <IncomeContainer>
          <Title level={4}>Page Views by Page Title</Title>
          <List
            dataSource={pageViewsData}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <a href={item.url} style={{ color: "#1890ff" }}>
                      {item.title}
                    </a>
                  }
                  description={<Text type="secondary">{item.url}</Text>}
                />
                <div>
                  <Text strong style={{ marginRight: "8px" }}>
                    {item.views}
                  </Text>
                  <Text type="secondary">{item.percentage}</Text>
                </div>
              </List.Item>
            )}
          />
        </IncomeContainer>
      </Col>
    </Row>
  );
};

export default IncomeGropGraph;

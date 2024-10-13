import React from "react";
import { Typography, Menu, Row, Col, List } from "antd";
import { DownloadOutlined, CaretDownOutlined } from "@ant-design/icons";

import { IncomeContainer } from "../../cardsStyledComponents/Container.styled";
import IncomeGraph from "./IncomeGraph";

const { Text, Title } = Typography;

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
        <IncomeGraph />
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

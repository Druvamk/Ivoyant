import React from "react";
import { Breadcrumb, Card, Col, Row, Statistic, Typography } from "antd";
import {
  BarChartOutlined,
  CalendarOutlined,
  DownloadOutlined,
  FileOutlined,
} from "@ant-design/icons";
import { cardStyle } from "./Cards";
const { Text, Title } = Typography;

const StaticCards: React.FC = () => (
  <>
    <Breadcrumb
      items={[
        {
          title: "Home",
          href: "/",
        },
        {
          title: "Statistics",
        },
      ]}
      params={{ id: 1 }}
      style={{ fontSize: "18px" }}
    />
    <Title level={2}>Statistics</Title>
    <Row gutter={20} style={{ marginTop: "16px" }}>
      <Col span={6}>
        <Card style={{ ...cardStyle, width: "300px", height: "100px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <Statistic
                value="$30200"
                valueStyle={{ color: "#000", fontWeight: "500" }}
              />
              <Text type="secondary">All Earnings</Text>
            </div>
            <BarChartOutlined style={{ fontSize: "24px", color: "#758694 " }} />
          </div>
        </Card>
      </Col>
      <Col span={6}>
        <Card style={{ ...cardStyle, width: "300px", height: "100px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <Statistic
                value="145"
                valueStyle={{ color: "#000", fontWeight: "500" }}
              />
              <Text type="secondary">Task</Text>
            </div>
            <CalendarOutlined style={{ fontSize: "24px" }} />
          </div>
        </Card>
      </Col>
      <Col span={6}>
        <Card style={{ ...cardStyle, width: "300px", height: "100px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <Statistic
                value="290+"
                valueStyle={{ color: "#000", fontWeight: "500" }}
              />
              <Text type="secondary">Page Views</Text>
            </div>
            <FileOutlined style={{ fontSize: "24px", color: "#B43F3F " }} />
          </div>
        </Card>
      </Col>
      <Col span={6}>
        <Card style={{ ...cardStyle, width: "300px", height: "100px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <Statistic
                value="500"
                valueStyle={{ color: "#000", fontWeight: "500" }}
              />
              <Text type="secondary">Downloads</Text>
            </div>
            <DownloadOutlined style={{ fontSize: "24px", color: "#009FBD " }} />
          </div>
        </Card>
      </Col>
    </Row>
  </>
);

export default StaticCards;

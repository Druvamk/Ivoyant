import React from "react";
import { Typography, Row, Col } from "antd";
import { Column, Line } from "@ant-design/charts";

const { Title } = Typography;

const LineData = [
  { day: "Jan", type: "page views", value: 76 },
  { day: "Jan", type: "sessions", value: 110 },
  { day: "Feb", type: "page views", value: 85 },
  { day: "Feb", type: "sessions", value: 101 },
  { day: "Mar", type: "page views", value: 150 },
  { day: "Mar", type: "sessions", value: 98 },
  { day: "Apr", type: "page views", value: 35 },
  { day: "Apr", type: "sessions", value: 87 },
  { day: "May", type: "page views", value: 87 },
  { day: "May", type: "sessions", value: 60 },
  { day: "Jun", type: "page views", value: 105 },
  { day: "Jun", type: "sessions", value: 36 },
  { day: "Aug", type: "page views", value: 114 },
  { day: "Aug", type: "sessions", value: 45 },
  { day: "Sep", type: "page views", value: 94 },
  { day: "Sep", type: "sessions", value: 65 },
  { day: "Oct", type: "page views", value: 86 },
  { day: "Oct", type: "sessions", value: 52 },
  { day: "Nov", type: "page views", value: 115 },
  { day: "Nov", type: "sessions", value: 53 },
  { day: "Dec", type: "page views", value: 36 },
  { day: "Dec", type: "sessions", value: 41 },
];

const lineConfig = {
  data: LineData,
  isGroup: true,
  xField: "day",
  yField: "value",
  seriesField: "type",
  color: ["#5B8FF9", "#5B8FF9"],
  smooth: true,
  height: 400,
  areaStyle: { fill: "green" },
};
const ColumnData = [
  { day: "Mon", value: 90 },
  { day: "Tue", value: 20 },
  { day: "Wed", value: 60 },
  { day: "Thu", value: 20 },
  { day: "Fri", value: 20 },
  { day: "Sat", value: 80 },
  { day: "Sun", value: 20 },
  { day: "Mon", value: 90 },
  { day: "Tue", value: 20 },
  { day: "Wed", value: 60 },
  { day: "Thu", value: 20 },
  { day: "Fri", value: 20 },
  { day: "Sat", value: 80 },
  { day: "Sun", value: 20 },
];

const columnConfig = {
  data: ColumnData,
  xField: "day",
  yField: "value",
  seriesField: "type",
  height: 400,
  color: "#1d1f20",
};

const UniqueGraph: React.FC = () => {
  return (
    <Row gutter={[16, 16]} style={{ marginTop: "16px" }}>
      <Col span={16}>
        <div
          style={{
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            padding: "16px",
          }}
        >
          <Line {...lineConfig} />
        </div>
      </Col>

      <Col span={8}>
        <div
          style={{
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            padding: "16px",
          }}
        >
          <Title level={4}>This Week Statistics</Title>
          <Title level={3}>$7,650</Title>
          <Column {...columnConfig} />
        </div>
      </Col>
    </Row>
  );
};

export default UniqueGraph;

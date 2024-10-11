import React from "react";
import {
  Card,
  Typography,
  Row,
  Col,
  Button,
  Divider,
  Space,
  Image,
} from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { Column } from "@ant-design/charts";
import avatar1 from "../../assests/avatar.png";
import avatar2 from "../../assests/avatar2.png";
import avatar3 from "../../assests/avatar3.png";
import avatar4 from "../../assests/avatar4.png";
const { Title, Text } = Typography;
const SalesReport: React.FC = () => {
  const data = [
    { month: "Jan", type: "Income", value: 160 },
    { month: "Jan", type: "Cost of Sales", value: 100 },
    { month: "Feb", type: "Income", value: 100 },
    { month: "Feb", type: "Cost of Sales", value: 80 },
    { month: "Mar", type: "Income", value: 180 },
    { month: "Mar", type: "Cost of Sales", value: 60 },
    { month: "Apr", type: "Income", value: 140 },
    { month: "Apr", type: "Cost of Sales", value: 130 },
    { month: "May", type: "Income", value: 200 },
    { month: "May", type: "Cost of Sales", value: 150 },
    { month: "Jun", type: "Income", value: 170 },
    { month: "Jun", type: "Cost of Sales", value: 180 },
    { month: "Jul", type: "Income", value: 190 },
    { month: "Jul", type: "Cost of Sales", value: 160 },
    { month: "Aug", type: "Income", value: 210 },
    { month: "Aug", type: "Cost of Sales", value: 190 },
    { month: "Sep", type: "Income", value: 160 },
    { month: "Sep", type: "Cost of Sales", value: 150 },
    { month: "Oct", type: "Income", value: 230 },
    { month: "Oct", type: "Cost of Sales", value: 200 },
    { month: "Nov", type: "Income", value: 220 },
    { month: "Nov", type: "Cost of Sales", value: 180 },
    { month: "Dec", type: "Income", value: 150 },
    { month: "Dec", type: "Cost of Sales", value: 130 },
  ];

  const config = {
    data,
    isGroup: true,
    xField: "month",
    yField: "value",
    seriesField: "type",
    color: ["#5B8FF9", "#F6BD16"],
    legend: {
      position: "top",
    },
    tooltip: {
      showMarkers: false,
    },
  };
  const imageWidth = 35;
  return (
    <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
      <Row gutter={[24, 24]}>
        <Col span={16}>
          <Card
            title="Sales Report"
            extra={<Text type="secondary">Today</Text>}
            style={{ marginBottom: 16 }}
          >
            <Title level={4} type="secondary">
              Net Profit
            </Title>
            <Title level={3}>$1560</Title>
            <Column {...config} />
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Transaction History" style={{ marginBottom: 16 }}>
            <Space direction="vertical" style={{ width: "100%" }}>
              <Row justify="space-between" align="middle">
                <Text>
                  <CheckCircleOutlined style={{ color: "#52c41a" }} /> Payment
                  from #002434
                </Text>
                <Text style={{ color: "#52c41a" }}>+$1,430</Text>
              </Row>
              <Text type="secondary">Today, 2:00 AM</Text>

              <Divider style={{ margin: "8px 0" }} />

              <Row justify="space-between" align="middle">
                <Text>
                  <CloseCircleOutlined style={{ color: "#f5222d" }} /> Payment
                  from #002434
                </Text>
                <Text style={{ color: "#f5222d" }}>-$1,430</Text>
              </Row>
              <Text type="secondary">Today, 6:00 AM</Text>

              <Divider style={{ margin: "8px 0" }} />

              <Row justify="space-between" align="middle">
                <Text>
                  <ClockCircleOutlined style={{ color: "#faad14" }} /> Pending
                  from #002435
                </Text>
                <Text style={{ color: "#faad14" }}>-$2,430</Text>
              </Row>
              <Text type="secondary">Today, 2:00 AM</Text>
            </Space>
          </Card>

          <Card>
            <Row justify="space-between" align="middle">
              <Col>
                <Text strong>Help & Support Chat</Text>
                <br />
                <Text type="secondary">Typical reply within 5 min</Text>
              </Col>
              <Col>
                <Image
                  src={avatar1}
                  preview={false}
                  width={imageWidth}
                  style={{ borderRadius: "50%" }}
                />
                <Image
                  src={avatar2}
                  preview={false}
                  width={imageWidth}
                  style={{ borderRadius: "50%" }}
                />
                <Image
                  src={avatar3}
                  preview={false}
                  width={imageWidth}
                  style={{ borderRadius: "50%" }}
                />
                <Image
                  src={avatar4}
                  preview={false}
                  width={imageWidth}
                  style={{ borderRadius: "50%" }}
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "16px" }}>
              <Button type="primary" style={{ width: "100%" }}>
                Need Help?
              </Button>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SalesReport;

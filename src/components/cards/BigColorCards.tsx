import {
  DollarOutlined,
  MedicineBoxOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Statistic, Typography } from "antd";
import { cardStyle } from "./Cards";
const { Title } = Typography;
export default function BigColorCards() {
  return (
    <Row gutter={20} style={{ marginTop: "16px" }}>
      <Col span={8}>
        <Card
          style={{
            ...cardStyle,
            width: "400px",
            height: "200px",
            background:
              "linear-gradient(90deg, #0052D4 0%, #4364F7 50%, #6FB1FC 100%)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <DollarOutlined
                style={{
                  fontSize: "44px",
                  marginBottom: "70px",
                }}
              />
            </div>
            <div>
              <Statistic
                title={
                  <Title level={4} style={{ color: "#fff", textAlign: "left" }}>
                    Revenue
                  </Title>
                }
                value={"$4500"}
                valueStyle={{
                  color: "#fff",
                  fontWeight: "500",
                  fontSize: "34px",
                }}
              />
              <p style={{ letterSpacing: "0.5px", color: "#fff" }}>
                $50,032 Last Month
              </p>
            </div>
          </div>
        </Card>
      </Col>
      <Col span={8}>
        <Card
          style={{
            ...cardStyle,
            width: "400px",
            height: "200px",
            background:
              "linear-gradient(90deg, #d3a418 0%, #b89b29 50%, #cec435 100%)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <ScheduleOutlined
                style={{
                  fontSize: "44px",
                  marginBottom: "70px",
                }}
              />
            </div>
            <div>
              <Statistic
                title={
                  <Title level={4} style={{ color: "#fff" }}>
                    Orders Received
                  </Title>
                }
                value={"486"}
                valueStyle={{
                  color: "#fff",
                  fontWeight: "500",
                  fontSize: "34px",
                }}
              />
              <p style={{ letterSpacing: "0.5px", color: "#fff" }}>
                20% Increase
              </p>
            </div>
          </div>
        </Card>
      </Col>
      <Col span={8}>
        <Card
          style={{
            ...cardStyle,
            width: "400px",
            height: "200px",
            background:
              "linear-gradient(90deg, #09810b 0%, #5ace85 50%, #72cb89 100%)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <MedicineBoxOutlined
                style={{
                  fontSize: "44px",
                  marginBottom: "70px",
                  color: "#DBD3D3",
                }}
              />
            </div>
            <div>
              <Statistic
                title={
                  <Title level={4} style={{ color: "#fff" }}>
                    Total Sales
                  </Title>
                }
                value={"1641"}
                valueStyle={{
                  fontWeight: "500",
                  fontSize: "34px",
                  color: "#fff",
                }}
              />
              <p style={{ letterSpacing: "2px", color: "#fff" }}>
                $1,055 Revenue Generated
              </p>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
}

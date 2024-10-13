import {
  DollarOutlined,
  MedicineBoxOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Statistic, Typography } from "antd";
import { cardStyle } from "./Cards";
import {
  Container,
  ParaGraph,
} from "../../cardsStyledComponents/Container.styled";
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
          <Container>
            <div>
              <DollarOutlined className="text-[44px] mb-[70px]" />
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
              <ParaGraph>$50,032 Last Month</ParaGraph>
            </div>
          </Container>
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
          <Container>
            <div>
              <ScheduleOutlined className="text-[44px] mb-[70px]" />
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
              <ParaGraph>20% Increase</ParaGraph>
            </div>
          </Container>
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
          <Container>
            <div>
              <MedicineBoxOutlined className="text-[44px] mb-[70px]" />
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
              <ParaGraph>$1,055 Revenue Generated</ParaGraph>
            </div>
          </Container>
        </Card>
      </Col>
    </Row>
  );
}

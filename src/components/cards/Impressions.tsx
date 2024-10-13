import React from "react";
import { Card, Col, Row, Statistic, Typography } from "antd";
import {
  AimOutlined,
  ClockCircleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { cardStyle } from "./Cards";
import {
  Container,
  ParaGraphImpressions,
} from "../../cardsStyledComponents/Container.styled";
const { Text } = Typography;

const Impressions: React.FC = () => (
  <>
    <Row gutter={20} style={{ marginTop: "16px" }}>
      <Col span={8}>
        <Card
          style={{
            ...cardStyle,
            width: "400px",
            height: "150px",
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
              <Statistic
                title={
                  <p
                    style={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      color: "#000",
                    }}
                  >
                    Impressions
                  </p>
                }
                value="1,563"
                valueStyle={{ color: "#000", fontWeight: "500" }}
              />
              <Text
                type="secondary"
                style={{ color: "#000", fontWeight: "500" }}
              >
                May 23 - June 01 (2018)
              </Text>
            </div>
            <EyeOutlined style={{ fontSize: "34px", color: "#2828bb " }} />
          </div>
        </Card>
      </Col>
      <Col span={8}>
        <Card
          style={{
            ...cardStyle,
            width: "400px",
            height: "150px",
          }}
        >
          <Container>
            <div>
              <Statistic
                title={<ParaGraphImpressions>Goal</ParaGraphImpressions>}
                value="30,564"
                valueStyle={{ color: "#000", fontWeight: "500" }}
              />
              <Text
                type="secondary"
                style={{ color: "#000", fontWeight: "500" }}
              >
                May 28 - June 01 (2018)
              </Text>
            </div>
            <AimOutlined style={{ fontSize: "34px", color: "#09a648 " }} />
          </Container>
        </Card>
      </Col>
      <Col span={8}>
        <Card
          style={{
            ...cardStyle,
            width: "400px",
            height: "150px",
          }}
        >
          <Container>
            <div>
              <Statistic
                title={<ParaGraphImpressions>Impact</ParaGraphImpressions>}
                value="42.6%"
                valueStyle={{ color: "#000", fontWeight: "500" }}
              />
              <Text
                type="secondary"
                style={{ color: "#000", fontWeight: "500" }}
              >
                May 30 - June 01 (2018)
              </Text>
            </div>
            <ClockCircleOutlined
              style={{ fontSize: "34px", color: "#dbe341 " }}
            />
          </Container>
        </Card>
      </Col>
    </Row>
  </>
);

export default Impressions;

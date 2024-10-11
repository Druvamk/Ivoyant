import React from "react";
import { Card, Col, Row, Statistic, Typography } from "antd";
import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { cardStyle } from "./Cards";
import { Container } from "../../cardsStyledComponents/Container.styled";
const { Text } = Typography;

const SocialCards: React.FC = () => (
  <>
    <Row gutter={20} style={{ marginTop: "16px" }}>
      <Col span={6}>
        <Card
          style={{
            ...cardStyle,
            width: "300px",
            height: "100px",
            background:
              "linear-gradient(90deg, #0052D4 0%, #4364F7 50%, #6FB1FC 100%)",
          }}
        >
          <Container>
            <div>
              <Statistic
                value="1165 +"
                valueStyle={{ color: "#fff", fontWeight: "500" }}
              />
              <Text type="secondary" style={{ color: "#fff" }}>
                Facebook Users
              </Text>
            </div>
            <FacebookOutlined style={{ fontSize: "34px", color: "#758694 " }} />
          </Container>
        </Card>
      </Col>
      <Col span={6}>
        <Card
          style={{
            ...cardStyle,
            width: "300px",
            height: "100px",
            background:
              "linear-gradient(90deg, #69bfb8 0%, #6ac4b8 50%, #51b6b3 100%)",
          }}
        >
          <Container>
            <div>
              <Statistic
                value="780 +"
                valueStyle={{ color: "#000", fontWeight: "500" }}
              />
              <Text type="secondary">Twitter Users</Text>
            </div>
            <TwitterOutlined style={{ fontSize: "34px" }} />
          </Container>
        </Card>
      </Col>
      <Col span={6}>
        <Card
          style={{
            ...cardStyle,
            width: "300px",
            height: "100px",
            background: "#000",
          }}
        >
          <Container>
            <div>
              <Statistic
                value="998 +"
                valueStyle={{ color: "#fff", fontWeight: "500" }}
              />
              <Text type="secondary" style={{ color: "#fff" }}>
                Linked In Users
              </Text>
            </div>
            <LinkedinOutlined style={{ fontSize: "34px", color: "gray" }} />
          </Container>
        </Card>
      </Col>
      <Col span={6}>
        <Card
          style={{
            ...cardStyle,
            width: "300px",
            height: "100px",
            background:
              "linear-gradient(90deg, #e23d38 0%, #e66938 50%, #e8332d 100%)",
          }}
        >
          <Container>
            <div>
              <Statistic
                value="650 +"
                valueStyle={{ color: "#fff", fontWeight: "500" }}
              />
              <Text type="secondary" style={{ color: "#fff" }}>
                Youtube Videos
              </Text>
            </div>
            <YoutubeOutlined style={{ fontSize: "34px", color: "#009FBD " }} />
          </Container>
        </Card>
      </Col>
    </Row>
  </>
);

export default SocialCards;

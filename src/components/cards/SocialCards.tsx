import React from "react";
import { Card, Col, Row, Statistic, Typography } from "antd";
import {
  BarChartOutlined,
  CalendarOutlined,
  DownloadOutlined,
  FacebookOutlined,
  FileOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { cardStyle } from "./Cards";
const { Text, Title } = Typography;

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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
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
          </div>
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <Statistic
                value="780 +"
                valueStyle={{ color: "#000", fontWeight: "500" }}
              />
              <Text type="secondary">Twitter Users</Text>
            </div>
            <TwitterOutlined style={{ fontSize: "34px" }} />
          </div>
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
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
          </div>
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
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
          </div>
        </Card>
      </Col>
    </Row>
  </>
);

export default SocialCards;

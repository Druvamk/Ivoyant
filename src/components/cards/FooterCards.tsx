import { FileOutlined, PlusOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Col, Progress, Row, Typography } from "antd";
import { marginTop } from "../../data";
import { ParaGraph1 } from "../../cardsStyledComponents/Container.styled";
const { Title, Text } = Typography;
export default function FooterCards() {
  return (
    <Row gutter={30} style={marginTop}>
      <Col span={14}>
        <div style={{ padding: "20px" }}>
          <Card bordered={false}>
            <Row gutter={16}>
              {/* Left Section */}
              <Col span={16} style={{ background: "#0D92F4" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <h2>What would you want to learn today</h2>
                  <ParaGraph1>
                    Your learning capacity is 80% as daily analytics
                  </ParaGraph1>
                  <div style={{ marginTop: "20px" }}>
                    <div>
                      <p>35% Completed</p>
                      <Progress
                        percent={35}
                        status="active"
                        strokeColor="#52c41a"
                      />
                    </div>
                  </div>
                </div>
              </Col>

              {/* Right Section */}
              <Col span={8}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <div>
                    <h3>Get started with new basic skills</h3>
                    <p>Last Date 5th Nov 2020</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "20px",
                    }}
                  >
                    <Avatar.Group maxCount={2}>
                      <Avatar src="https://i.pravatar.cc/150?img=1" />
                      <Avatar src="https://i.pravatar.cc/150?img=2" />
                      <Avatar src="https://i.pravatar.cc/150?img=3" />
                      <Avatar src="https://i.pravatar.cc/150?img=4" />
                    </Avatar.Group>
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<PlusOutlined />}
                      style={marginTop}
                    />
                  </div>
                  <p style={marginTop}>
                    Chrome fixed the bug several versions ago, thus rendering
                    this...
                  </p>
                </div>
              </Col>
            </Row>
          </Card>
        </div>
      </Col>
      <Col span={10}>
        <Card className="bg-[#1890ff] rounded-[10px] h-[150px] flex justify-center items-center relative">
          <FileOutlined className="text-[100px] text-[rgba(255,255,255,0.3)] absolute left-[10px] bottom-[10px]" />

          <div className="text-center">
            <Title level={2} style={{ color: "#fff", marginBottom: "8px" }}>
              1K
            </Title>
            <Text style={{ color: "#fff", fontWeight: "500" }}>
              Daily page view
            </Text>
          </div>
        </Card>
      </Col>
    </Row>
  );
}

import {
  Avatar,
  Breadcrumb,
  Card,
  Checkbox,
  Col,
  Divider,
  Progress,
  Row,
  Space,
  Typography,
} from "antd";
import { checkBoxdataProps } from "../../../../types";
import { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { datacardrow1, teamData } from "../../../../data";
const { Title, Text } = Typography;

export default function DataCardRow1() {
  const Data: checkBoxdataProps[] = [
    { title: "Check your Email", completed: false },
    { title: "Make YouTube Video", completed: false },
    { title: "Check your Email", completed: false },
    { title: "Create Banner", completed: false },
    { title: "Update Project", completed: false },
    { title: "Update Project", completed: false },
    { title: "Task Issue", completed: false },
  ];
  const [checkBoxData, setCheckBoxData] = useState(Data);

  function handleTick(index: number) {
    console.log(index);
    setCheckBoxData(
      checkBoxData.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  }
  return (
    <div>
      <Breadcrumb
        items={[
          {
            title: "Home",
            href: "/",
          },
          {
            title: "Data",
          },
        ]}
        params={{ id: 1 }}
        style={{ fontSize: "18px" }}
      />

      <Title level={2}>Data</Title>
      <Row gutter={24}>
        <Col span={8}>
          <Space direction="vertical" size={16}>
            <Card
              title="To Do List"
              extra={
                <PlusCircleOutlined
                  style={{ color: "blue", fontSize: "14px" }}
                />
              }
              style={{ width: 400 }}
            >
              {checkBoxData.map((item, index) => (
                <div>
                  <Checkbox key={index} onChange={() => handleTick(index)}>
                    <p
                      style={{
                        textDecoration: item.completed
                          ? "line-through"
                          : "none",
                        margin: "10px",
                      }}
                    >
                      {item.title}
                    </p>
                  </Checkbox>
                </div>
              ))}
            </Card>
          </Space>
        </Col>
        <Col span={8}>
          <Card
            title={
              <>
                <div>Traffic Sources</div>
                <p style={{ fontSize: "12px" }}>
                  You’re getting more and more sources, keep it up!
                </p>
              </>
            }
          >
            {datacardrow1.map((item, index) => (
              <>
                <Row justify="space-between" align="middle" key={index}>
                  <Text>{item.title}</Text>
                  <Text>{item.percentage}%</Text>
                </Row>
                <Progress
                  percent={item.percentage}
                  showInfo={false}
                  strokeWidth={7}
                  strokeColor={item.color}
                />
                <Divider style={{ margin: "10px" }} />
              </>
            ))}
          </Card>
        </Col>
        <Col span={8}>
          <Space direction="vertical" size={16}>
            <Card
              title="Team Members"
              extra={<a href="#">View all</a>}
              style={{ width: 400 }}
            >
              {teamData.map((item, index) => (
                <Row align="middle" style={{ padding: "10px" }} key={index}>
                  <Col>
                    <Avatar src={item.src} size="large" />
                  </Col>
                  <Col style={{ paddingLeft: "10px" }}>
                    <Text strong>David Jones</Text>
                    <br />
                    <Text type="secondary">{item.rol}</Text>
                  </Col>
                  <Col style={{ marginLeft: "auto" }}>
                    <Text type="secondary">{item.time}</Text>
                  </Col>
                </Row>
              ))}
            </Card>
          </Space>
        </Col>
      </Row>
    </div>
  );
}

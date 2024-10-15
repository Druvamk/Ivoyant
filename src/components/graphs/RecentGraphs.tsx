import React from "react";
import { Table, Card, Statistic, Row, Col, Badge, Typography } from "antd";
import SingleGraph from "./SingleGraph";
const { Title } = Typography;
// Define the types for table data
interface TableData {
  key: string;
  trackingNo: string;
  productName: string;
  totalOrder: number;
  status: string;
  totalAmount: string;
}

const RecentGraphs: React.FC = () => {
  const columns = [
    {
      title: "TRACKING NO.",
      dataIndex: "trackingNo",
      key: "trackingNo",
    },
    {
      title: "PRODUCT NAME",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "TOTAL ORDER",
      dataIndex: "totalOrder",
      key: "totalOrder",
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        let color = "default";
        if (status === "Approved") color = "green";
        else if (status === "Rejected") color = "red";
        else if (status === "Pending") color = "orange";
        return <Badge color={color} text={status} />;
      },
    },
    {
      title: "TOTAL AMOUNT",
      dataIndex: "totalAmount",
      key: "totalAmount",
    },
  ];

  const data: TableData[] = [
    {
      key: "1",
      trackingNo: "13256498",
      productName: "Keyboard",
      totalOrder: 125,
      status: "Rejected",
      totalAmount: "$70,999",
    },
    {
      key: "2",
      trackingNo: "13286564",
      productName: "Computer Accessories",
      totalOrder: 100,
      status: "Approved",
      totalAmount: "$83,348",
    },
    {
      key: "3",
      trackingNo: "84564564",
      productName: "Camera Lens",
      totalOrder: 40,
      status: "Rejected",
      totalAmount: "$40,570",
    },
    {
      key: "4",
      trackingNo: "86739658",
      productName: "TV",
      totalOrder: 99,
      status: "Pending",
      totalAmount: "$410,780",
    },
    {
      key: "5",
      trackingNo: "98652366",
      productName: "Handset",
      totalOrder: 50,
      status: "Approved",
      totalAmount: "$10,239",
    },
    {
      key: "6",
      trackingNo: "98753263",
      productName: "Mouse",
      totalOrder: 89,
      status: "Rejected",
      totalAmount: "$10,570",
    },
    {
      key: "7",
      trackingNo: "98753275",
      productName: "Desktop",
      totalOrder: 185,
      status: "Approved",
      totalAmount: "$98,063",
    },
    {
      key: "8",
      trackingNo: "98753291",
      productName: "Chair",
      totalOrder: 100,
      status: "Pending",
      totalAmount: "$14,001",
    },
    {
      key: "9",
      trackingNo: "98756325",
      productName: "Mobile",
      totalOrder: 355,
      status: "Approved",
      totalAmount: "$90,989",
    },
    {
      key: "10",
      trackingNo: "98764564",
      productName: "Laptop",
      totalOrder: 300,
      status: "Pending",
      totalAmount: "$180,139",
    },
  ];

  return (
    <div>
      <h3>Recent Orders</h3>
      <Row gutter={[16, 16]}>
        <Col span={16}>
          <Table<TableData>
            columns={columns}
            dataSource={data}
            pagination={false}
          />
        </Col>
        <Col span={8}>
          <Card>
            <Row justify="space-between" align="middle">
              <Col span={12}>
                <p>Company Finance Growth</p>
              </Col>
              <Col span={12}>
                <Title
                  level={4}
                  style={{ marginLeft: "100px", marginBottom: "16px" }}
                >
                  +45.14%
                </Title>
              </Col>
            </Row>
            <Row justify="space-between" align="middle">
              <Col span={12}>
                <p>Company Finance ratio</p>
              </Col>
              <Col span={12}>
                <Title
                  level={4}
                  style={{ marginLeft: "120px", marginBottom: "16px" }}
                >
                  0.58%
                </Title>
              </Col>
            </Row>
            <Row justify="space-between" align="middle">
              <Col span={12}>
                <p>Business Risk Cases</p>
              </Col>
              <Col span={12}>
                <Title
                  level={4}
                  style={{ marginLeft: "120px", marginBottom: "16px" }}
                >
                  Low
                </Title>
              </Col>
            </Row>

            <SingleGraph />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default RecentGraphs;

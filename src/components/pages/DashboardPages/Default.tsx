import { Card, Row, Col, Statistic, Button } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

const Dashboard = () => {
  return (
    <div>
      <h3>Dashboard</h3>
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <Statistic
              title="Total Page Views"
              value={442236}
              valueStyle={{ color: "#3f8600" }}
              suffix={
                <Button
                  style={{ marginTop: "10px", border: "1px solid #3f8600" }}
                  icon={<ArrowUpOutlined />}
                >
                  59%
                </Button>
              }
            />
            {/* <p style={{ marginTop: "10px" }}>
              You made an extra 35,000 this year
            </p> */}
          </Card>
        </Col>

        <Col span={6}>
          <Card>
            <Statistic
              title="Total Users"
              value={78250}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="70.5%"
            />
            <p style={{ marginTop: "10px" }}>
              You made an extra 8,900 this year
            </p>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Total Orders"
              value={18800}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ArrowDownOutlined />}
              suffix="27.4%"
            />
            <p style={{ marginTop: "10px" }}>
              You made an extra 1,943 this year
            </p>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Total Sales"
              value={35078}
              prefix="$"
              valueStyle={{ color: "#cf1322" }}
              suffix="27.4%"
            />
            <p style={{ marginTop: "10px" }}>
              You made an extra $20,395 this year
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;

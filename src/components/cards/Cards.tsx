import { Card, Row, Col, Statistic, Tag } from "antd";
import { RiseOutlined, FallOutlined } from "@ant-design/icons";
import { ParaGraph1 } from "../../cardsStyledComponents/Container.styled";
import { marginTop } from "../../data";
export const buttonStyle = { marginTop: "10px", border: "1px solid #3f8600" };
export const cardStyle = { height: "140px", width: "300px" };

export default function Cards() {
  return (
    <Row gutter={16} style={marginTop}>
      <Col span={6}>
        <Card style={cardStyle}>
          <Statistic
            title="Total Page Views"
            value={442236}
            valueStyle={{ color: "#000" }}
            suffix={
              <Tag color="blue" icon={<RiseOutlined />}>
                59.3%
              </Tag>
            }
          />
          <ParaGraph1>You made an extra 35,000 this year</ParaGraph1>
        </Card>
      </Col>

      <Col span={6}>
        <Card style={cardStyle}>
          <Statistic
            title="Total Users"
            value={78250}
            valueStyle={{ color: "#000" }}
            suffix={
              <Tag color="blue" icon={<RiseOutlined />}>
                70.5%
              </Tag>
            }
          />
          <ParaGraph1>You made an extra 8,900 this year</ParaGraph1>
        </Card>
      </Col>
      <Col span={6}>
        <Card style={cardStyle}>
          <Statistic
            title="Total Orders"
            value={18800}
            valueStyle={{ color: "#000" }}
            suffix={
              <Tag color="yellow" icon={<FallOutlined />}>
                27.4%
              </Tag>
            }
          />
          <ParaGraph1>You made an extra 1,943 this year</ParaGraph1>
        </Card>
      </Col>
      <Col span={6}>
        <Card style={cardStyle}>
          <Statistic
            title="Total Sales"
            value={35078}
            prefix="$"
            valueStyle={{ color: "#000" }}
            suffix={
              <Tag color="yellow" icon={<FallOutlined />}>
                27.4%
              </Tag>
            }
          />
          <ParaGraph1>You made an extra $20,395 this year</ParaGraph1>
        </Card>
      </Col>
    </Row>
  );
}

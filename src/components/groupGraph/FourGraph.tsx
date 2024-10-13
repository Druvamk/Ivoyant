import { Button, Card, Col, Row, Statistic, Tag } from "antd";
import { GroupGraphContainer } from "../../cardsStyledComponents/Container.styled";
import { ArrowUpOutlined, FallOutlined, RiseOutlined } from "@ant-design/icons";
import Users from "../graphs/Users";
import Sales from "../graphs/Sales";
import MarketOverview from "../graphs/MarketOverview";
import Order from "../graphs/Order";

export default function FourGraph() {
  return (
    <div>
      <Row gutter={16}>
        <Col span={6}>
          <Card
            style={{
              width: 300,
              height: 230,
              paddingRight: "10px",
            }}
          >
            <GroupGraphContainer>
              <Statistic
                style={{ marginLeft: "40px" }}
                title="Total Users"
                value={78250}
                valueStyle={{ color: "#000", fontWeight: "bold" }}
                suffix={
                  <Tag
                    color="blue"
                    style={{ height: "20px", width: "70px" }}
                    icon={<RiseOutlined style={{ color: "blue" }} />}
                  >
                    70.5%
                  </Tag>
                }
              />
              <Users />
            </GroupGraphContainer>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            style={{
              width: 300,
              height: 230,
              paddingRight: "10px",
            }}
          >
            <GroupGraphContainer>
              <Statistic
                style={{ marginLeft: "40px" }}
                title="Total Order"
                value={18800}
                valueStyle={{ color: "#000", fontWeight: "bold" }}
                suffix={
                  <Tag
                    color="yellow"
                    style={{ height: "20px", width: "70px" }}
                    icon={<FallOutlined style={{ color: "#FFC55A" }} />}
                  >
                    27.4%
                  </Tag>
                }
              />
              <Order />
            </GroupGraphContainer>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            style={{
              width: 300,
              height: 230,
              paddingRight: "10px",
            }}
          >
            <GroupGraphContainer>
              <Statistic
                style={{ marginLeft: "40px" }}
                title="Total Sales"
                value={"$35,078"}
                valueStyle={{ color: "#000", fontWeight: "bold" }}
                suffix={
                  <Tag
                    color="yellow"
                    style={{ height: "20px", width: "70px" }}
                    icon={<FallOutlined style={{ color: "#FFC55A" }} />}
                  >
                    27.4%
                  </Tag>
                }
              />
              <Sales />
            </GroupGraphContainer>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            style={{
              width: 300,
              height: 230,
              paddingRight: "10px",
            }}
          >
            <GroupGraphContainer>
              <Statistic
                style={{ marginLeft: "40px" }}
                title="Total Marketing"
                value={"$1,12,083"}
                valueStyle={{ color: "#000", fontWeight: "bold" }}
                suffix={
                  <Tag
                    color="blue"
                    style={{ height: "20px", width: "70px" }}
                    icon={<RiseOutlined style={{ color: "blue" }} />}
                  >
                    70.5%
                  </Tag>
                }
              />
              <div style={{ height: "130px" }}>
                <MarketOverview />
              </div>
            </GroupGraphContainer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

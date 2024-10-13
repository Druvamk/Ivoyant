import { Card, Col, Row, Statistic, Tag } from "antd";
import { GroupGraphContainer } from "../../cardsStyledComponents/Container.styled";
import { FallOutlined, RiseOutlined } from "@ant-design/icons";
import Users from "../graphs/Users";
import Sales from "../graphs/Sales";
import MarketOverview from "../graphs/MarketOverview";
import Order from "../graphs/Order";
import "./graph.scss";
export default function FourGraph() {
  return (
    <div>
      <Row gutter={16}>
        <Col span={6}>
          <Card className="cards">
            <GroupGraphContainer>
              <Statistic
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
                className="statistic"
              />
              <Users />
            </GroupGraphContainer>
          </Card>
        </Col>
        <Col span={6}>
          <Card className="cards">
            <GroupGraphContainer>
              <Statistic
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
                className="statistic"
              />
              <Order />
            </GroupGraphContainer>
          </Card>
        </Col>
        <Col span={6}>
          <Card className="cards">
            <GroupGraphContainer>
              <Statistic
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
                className="statistic"
              />
              <Sales />
            </GroupGraphContainer>
          </Card>
        </Col>
        <Col span={6}>
          <Card className="cards">
            <GroupGraphContainer>
              <Statistic
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
                className="statistic"
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

import { Button, Card, Col, Layout, Row, Statistic } from "antd";
import welcomebanner from "../../assests/welcome-banner-D4VmDBhG.png";
import { ArrowUpOutlined } from "@ant-design/icons";
import Users from "../graphs/Users";
import Order from "../graphs/Order";
import Sales from "../graphs/Sales";
import MarketOverview from "../graphs/MarketOverview";

function GroupGraph() {
  return (
    <>
      <div>
        <Layout>
          <Card
            style={{
              background:
                "linear-gradient(90deg, #0052D4 0%, #4364F7 50%, #6FB1FC 100%)",
              borderRadius: "10px",
              padding: "20px",
              color: "#fff",
              height: "250px",
            }}
            bordered={false}
          >
            <Row>
              <Col span={16}>
                <h1 style={{ color: "white", fontWeight: "100px" }}>
                  Welcome to Mantis
                </h1>
                <p style={{ color: "white", fontWeight: "10px" }}>
                  The purpose of a product update is to add new features, fix
                  bugs or improve the performance of the product.
                </p>
                <Button type="primary" ghost>
                  View Full Statistic
                </Button>
              </Col>
              <Col span={8} style={{ textAlign: "right" }}>
                <img
                  src={welcomebanner}
                  alt="banner illustration"
                  style={{ width: "250px", height: "auto" }}
                />
              </Col>
            </Row>
          </Card>
        </Layout>
      </div>
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Statistic
                  style={{ marginLeft: "40px" }}
                  title="Total Users"
                  value={78250}
                  valueStyle={{ color: "#000", fontWeight: "bold" }}
                  suffix={
                    <Button
                      style={{
                        marginTop: "10px",
                        border: "1px solid #006BFF",
                        height: "30px",
                        width: "70px",
                      }}
                      icon={<ArrowUpOutlined />}
                    >
                      59%
                    </Button>
                  }
                />
                <Users />
              </div>
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Statistic
                  style={{ marginLeft: "40px" }}
                  title="Total Order"
                  value={18800}
                  valueStyle={{ color: "#000", fontWeight: "bold" }}
                  suffix={
                    <Button
                      style={{
                        marginTop: "10px",
                        border: "1px solid #F3C623",
                        height: "30px",
                        width: "70px",
                      }}
                      icon={<ArrowUpOutlined />}
                    >
                      59%
                    </Button>
                  }
                />
                <Order />
              </div>
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Statistic
                  style={{ marginLeft: "40px" }}
                  title="Total Sales"
                  value={"$35,078"}
                  valueStyle={{ color: "#000", fontWeight: "bold" }}
                  suffix={
                    <Button
                      style={{
                        marginTop: "10px",
                        border: "1px solid #F3C623",
                        height: "30px",
                        width: "70px",
                      }}
                      icon={<ArrowUpOutlined />}
                    >
                      59%
                    </Button>
                  }
                />
                <Sales />
              </div>
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Statistic
                  style={{ marginLeft: "40px" }}
                  title="Total Marketing"
                  value={"$1,12,083"}
                  valueStyle={{ color: "#000", fontWeight: "bold" }}
                  suffix={
                    <Button
                      style={{
                        marginTop: "10px",
                        border: "1px solid #3f8600",
                        height: "30px",
                        width: "70px",
                      }}
                      icon={<ArrowUpOutlined />}
                    >
                      59%
                    </Button>
                  }
                />
                <div style={{ height: "130px" }}>
                  <MarketOverview />
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      ;
    </>
  );
}

export default GroupGraph;

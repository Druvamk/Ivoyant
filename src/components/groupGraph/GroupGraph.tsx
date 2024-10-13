import { Button, Card, Col, Image, Layout, Row } from "antd";
import welcomebanner from "../../assests/welcome-banner-D4VmDBhG.png";
import FourGraph from "./FourGraph";
import Title from "antd/es/typography/Title";

function GroupGraph() {
  return (
    <>
      <div>
        <Layout>
          <Card
            bordered={false}
            className="bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] rounded-[10px] p-[20px] text-white h-[250px]"
          >
            <Row>
              <Col span={16}>
                <Title style={{ color: "white" }}>Welcome to Mantis</Title>
                <p
                  style={{
                    color: "white",
                    fontWeight: "10px",
                    marginBottom: "10px",
                  }}
                >
                  The purpose of a product update is to add new features, fix
                  bugs or <br></br> improve the performance of the product.
                </p>
                <Button type="primary" ghost>
                  View Full Statistic
                </Button>
              </Col>
              <Col span={8} className="text-right">
                <Image
                  src={welcomebanner}
                  alt="banner illustration"
                  className="w-[250px] h-auto"
                />
              </Col>
            </Row>
          </Card>
        </Layout>
      </div>
      <div>
        <FourGraph />
      </div>
      ;
    </>
  );
}

export default GroupGraph;

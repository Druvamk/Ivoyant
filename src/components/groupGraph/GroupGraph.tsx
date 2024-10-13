import { Button, Card, Col, Image, Layout, Row } from "antd";
import welcomebanner from "../../assests/welcome-banner-D4VmDBhG.png";
import FourGraph from "./FourGraph";

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
                <Image
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
        <FourGraph />
      </div>
      ;
    </>
  );
}

export default GroupGraph;

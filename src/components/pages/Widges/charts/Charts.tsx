import { Breadcrumb, Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import FourGraph from "../../../groupGraph/FourGraph";
import UniqueGraph from "../../../groupGraph/UniqueGraph";
import SingleGraph from "../../../graphs/SingleGraph";
import SalesReport from "../../../graphs/SalesGroup";
import IncomeGraph from "../../../groupGraph/IncomeGraph";

export default function Charts() {
  return (
    <div>
      <Breadcrumb
        items={[
          {
            title: "Home",
            href: "/",
          },
          {
            title: "Charts",
          },
        ]}
        params={{ id: 1 }}
        style={{ fontSize: "18px" }}
      />
      <Title>Chart</Title>
      <FourGraph />
      <UniqueGraph />
      <Row gutter={16}>
        <Col span={8}>
          <SingleGraph />
        </Col>
        <Col span={16}>
          <IncomeGraph />
        </Col>
      </Row>

      <SalesReport />
    </div>
  );
}

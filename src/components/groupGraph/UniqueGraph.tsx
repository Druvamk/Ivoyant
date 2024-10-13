import React from "react";
import { Typography, Row, Col } from "antd";
import { Column, Line } from "@ant-design/charts";
import { IncomeContainer } from "../../cardsStyledComponents/Container.styled";
import { columnConfig, lineConfig, marginTop } from "../../data";

const { Title } = Typography;

const UniqueGraph: React.FC = () => {
  return (
    <Row gutter={[16, 16]} style={marginTop}>
      <Col span={16}>
        <IncomeContainer>
          <Line {...lineConfig} />
        </IncomeContainer>
      </Col>
      <Col span={8}>
        <IncomeContainer>
          <Title level={4}>This Week Statistics</Title>
          <Title level={3}>$7,650</Title>
          <Column {...columnConfig} />
        </IncomeContainer>
      </Col>
    </Row>
  );
};

export default UniqueGraph;

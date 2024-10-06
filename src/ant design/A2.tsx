import { Divider, Typography } from "antd";
import Title from "antd/es/typography/Title";
const { Text } = Typography;

function A2(): JSX.Element {
  return (
    <div>
      <Title level={5}>svdcuysg</Title>
      <Title level={4}>svdcuysg</Title>
      <Title level={3}>svdcuysg</Title>
      <Title level={2}>svdcuysg</Title>
      <Title level={1}>svdcuysg</Title>
      <Divider />
      <Text type="secondary">secondary</Text>
      <Text type="success">secondary</Text>
      <Text type="warning">secondary</Text>
      <Text type="danger">secondary</Text>
      <Text disabled>something new</Text>
      <Text mark>mew mark</Text>
      <Text code>mew mark</Text>
      <Text keyboard>mew mark</Text>
      <Text delete>mew mark</Text>
    </div>
  );
}

export default A2;

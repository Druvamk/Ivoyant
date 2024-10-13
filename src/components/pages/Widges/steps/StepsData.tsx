import {
  BugOutlined,
  ClockCircleOutlined,
  HeatMapOutlined,
  MobileOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { StepProps, Steps, Typography } from "antd";
const { Text } = Typography;
const data: StepProps[] = [
  {
    title: <Text type="secondary">8:50</Text>,
    description: (
      <Text>You’re getting more and more followers, keep it up!</Text>
    ),
    icon: <TwitterOutlined style={{ color: "green" }} />,
  },
  {
    title: <Text type="secondary">Sun, 17 Feb</Text>,
    description: <Text>Design mobile Application</Text>,
    icon: <ClockCircleOutlined style={{ color: "blue" }} />,
  },
  {
    title: <Text type="secondary">Sat, 18 Mar</Text>,
    description: <Text>Jenny assign you a task Mockup Design.</Text>,
    icon: <BugOutlined style={{ color: "red" }} />,
  },
  {
    title: <Text type="secondary">Sat, 18 Mar</Text>,
    description: <Text>Design logo</Text>,
    icon: <HeatMapOutlined style={{ color: "orange" }} />,
  },
  {
    title: <Text type="secondary">Sat, 22 Mar</Text>,
    description: <Text>Design mobile Application</Text>,
    icon: <MobileOutlined style={{ color: "green" }} />,
  },
];

const StepsData: React.FC = () => {
  return (
    <>
      <Steps direction="vertical" items={data} current={-1} />
    </>
  );
};

export default StepsData;

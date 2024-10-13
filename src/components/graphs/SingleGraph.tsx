import { Card } from "antd";
import { Recentconfig } from "../../data";
import { Line } from "@ant-design/charts";

export default function SingleGraph() {
  return (
    <Card>
      <Line {...Recentconfig} />
    </Card>
  );
}

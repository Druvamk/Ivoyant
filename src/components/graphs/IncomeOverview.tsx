import { Line } from "@ant-design/charts";
import { incomedataconfig } from "./graphshelpes";

export default function IncomeOverview() {
  return (
    <div style={{ height: "350px", width: "800px" }}>
      <Line {...incomedataconfig} />
    </div>
  );
}

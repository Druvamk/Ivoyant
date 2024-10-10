// import { Line } from "react-chartjs-2";
// import { marketconfig } from "./graphshelpes";

import { Line } from "@ant-design/charts";
import { marketconfig } from "./graphshelpes";

// export const marketOverview: React.FC = () => {
//   return ;
// };

export default function MarketOverview() {
  return <Line {...marketconfig} />;
}

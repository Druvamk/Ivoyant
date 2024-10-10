import {
  DataPointProps,
  marketconfigProps,
  marketDataProps,
  VerticalconfigProps,
} from "../../types";
// verticaloverview types
export const Verticaldata: DataPointProps[] = [
  { month: "Mon", value: 100 },
  { month: "Tue", value: 20 },
  { month: "Web", value: 60 },
  { month: "Thu", value: 20 },
  { month: "Fri", value: 20 },
  { month: "Sat", value: 80 },
  { month: "Sun", value: 20 },
];
export const Verticalconfig: VerticalconfigProps = {
  data: Verticaldata,
  xField: "month",
  yField: "value",
  smooth: false,
  color: "#3B9CFF",
  meta: {
    month: { alias: "Month" },
    value: { alias: "Value" },
  },
};
export const marketData: marketDataProps[] = [
  { market: "1", value: 100 },
  { market: "2", value: 140 },
  { market: "3", value: 100 },
  { market: "4", value: 240 },
  { market: "5", value: 115 },
  { market: "6", value: 100 },
  { market: "7", value: 140 },
  { market: "8", value: 100 },
  { market: "9", value: 240 },
  { market: "10", value: 115 },
  { market: "11", value: 100 },
  { market: "12", value: 140 },
  { market: "13", value: 100 },
  { market: "14", value: 240 },
  { market: "15", value: 115 },
  { market: "16", value: 100 },
  { market: "17", value: 140 },
  { market: "18", value: 100 },
  { market: "19", value: 240 },
  { market: "20", value: 115 },
];
export const marketconfig: marketconfigProps = {
  data: marketData,
  xField: "market",
  yField: "value",
  smooth: false,
  color: "#3B9CFF",
  meta: {
    month: { alias: "Month" },
    value: { alias: "Value" },
  },
};

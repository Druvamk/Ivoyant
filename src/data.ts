import {
  DataType2,
  combineCardsProps,
  datacardRow1Props,
  teamMemberDataProps,
  teamProps,
  userActivityDataProps,
} from "./types";
import avatar1 from "../src/assests/avatar.png";
import avatar2 from "../src/assests/avatar2.png";
import avatar3 from "../src/assests/avatar3.png";
import avatar4 from "../src/assests/avatar4.png";
import { TableColumnsType } from "antd";
import { LineConfig } from "@ant-design/charts";
export const a1 = avatar1;
export const a2 = avatar2;
export const a3 = avatar3;
export const a4 = avatar4;
export const datacardrow1: datacardRow1Props[] = [
  {
    title: "Referral",
    percentage: 20,
    color: "#4364F7",
  },
  {
    title: "Bounce",
    percentage: 58,
    color: "#808080",
  },
  {
    title: "Internet",
    percentage: 40,
    color: "#4364F7",
  },
  {
    title: "Social",
    percentage: 90,
    color: "#4364F7",
  },
];
export const teamData: teamProps[] = [
  {
    rol: "Project Leader",
    time: "5 min ago",
    src: avatar1,
  },
  {
    rol: "HR Manager",
    time: "1 hour ago",
    src: avatar2,
  },
  {
    rol: "Developer",
    time: "Yesterday",
    src: avatar3,
  },
  {
    rol: "UI/UX Designer",
    time: "02-05-2021",
    src: avatar4,
  },
];
export const teamMemberData: teamMemberDataProps[] = [
  {
    time: "2 hrs ago",
    src: avatar1,
    follwers: "+ 1652 Followers",
    desc: "You’re getting more and more followers, keep it up!",
  },
  {
    time: "4 hrs ago",
    src: avatar2,
    follwers: "+ 5 New Products were added!",
    desc: "Congratulations!",
  },
  {
    time: "2 hrs ago",
    src: avatar3,
    follwers: "Database backup completed!",
    desc: "Download the latest backup.",
  },
  {
    time: "2 hrs ago",
    src: avatar4,
    follwers: "+2 Friend Requests",
    desc: "This is great, keep it up!",
  },
];
export const userActivityData: userActivityDataProps[] = [
  {
    src: avatar1,
    time: "now",
  },
  {
    src: avatar2,
    time: "2 min ago",
  },
  {
    src: avatar3,
    time: "1 day ago",
  },
  {
    src: avatar4,
    time: "3 week ago",
  },
];
// export const columns: TableColumnsType<DataType>["Columns"] = [
//   {
//     title: "Assigned",
//     dataIndex: "assigned",
//   },
//   {
//     title: "Name",
//     dataIndex: "name",
//   },
//   {
//     title: "Due Date",
//     dataIndex: "dueDate",
//   },
//   {
//     title: "Priority",
//     dataIndex: "priority",
//     render: (priority: string) => {
//       let color = "default";
//       if (priority === "High") color = "red";
//       else if (priority === "Medium") color = "orange";
//       else if (priority === "Low") color = "blue";
//       return <Tag color={color}>{priority}</Tag>;
//     },
//   },
// ];
export const columns2: TableColumnsType<DataType2> = [
  {
    title: "Last Sales",
    dataIndex: "lastsales",
  },
  {
    title: "Product Name",
    dataIndex: "productname",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
];
export const marginTop = { marginTop: "16px" };
export const data1: DataType2[] = [
  {
    key: "1",
    lastsales: "2136",
    productname: "Head Phone",
    price: "$ 926.23",
  },
  {
    key: "2",
    lastsales: "2546",
    productname: "Iphone V",
    price: "$ 485.85",
  },
  {
    key: "3",
    lastsales: "2681",
    productname: "Jacket",
    price: "$ 786.4",
  },
  {
    key: "4",
    lastsales: "2136",
    productname: "Head Phone",
    price: "$ 926.23",
  },
  {
    key: "5",
    lastsales: "2756",
    productname: "Sofa",
    price: "$ 563.45",
  },
  {
    key: "6",
    lastsales: "3652",
    productname: "Iphone X",
    price: "$ 563.45",
  },
  {
    key: "7",
    lastsales: "2756",
    productname: "Sofa",
    price: "$ 754.45",
  },
  {
    key: "8",
    lastsales: "7456",
    productname: "Jacket",
    price: "$ 743.23",
  },
];
export const Recentconfig: LineConfig = {
  data: [
    { month: "Jun", value: 30 },
    { month: "Jul", value: 70 },
    { month: "Aug", value: 10 },
    { month: "Sep", value: 80 },
    { month: "Oct", value: 50 },
    { month: "Nov", value: 60 },
    { month: "Dec", value: 20 },
  ],
  xField: "month",
  yField: "value",
  smooth: true,
  color: "#F3C623",
};
const LineData = [
  { day: "Jan", type: "page views", value: 76 },
  { day: "Jan", type: "sessions", value: 110 },
  { day: "Feb", type: "page views", value: 85 },
  { day: "Feb", type: "sessions", value: 101 },
  { day: "Mar", type: "page views", value: 150 },
  { day: "Mar", type: "sessions", value: 98 },
  { day: "Apr", type: "page views", value: 35 },
  { day: "Apr", type: "sessions", value: 87 },
  { day: "May", type: "page views", value: 87 },
  { day: "May", type: "sessions", value: 60 },
  { day: "Jun", type: "page views", value: 105 },
  { day: "Jun", type: "sessions", value: 36 },
  { day: "Aug", type: "page views", value: 114 },
  { day: "Aug", type: "sessions", value: 45 },
  { day: "Sep", type: "page views", value: 94 },
  { day: "Sep", type: "sessions", value: 65 },
  { day: "Oct", type: "page views", value: 86 },
  { day: "Oct", type: "sessions", value: 52 },
  { day: "Nov", type: "page views", value: 115 },
  { day: "Nov", type: "sessions", value: 53 },
  { day: "Dec", type: "page views", value: 36 },
  { day: "Dec", type: "sessions", value: 41 },
];

export const lineConfig = {
  data: LineData,
  isGroup: true,
  xField: "day",
  yField: "value",
  seriesField: "type",
  color: ["#5B8FF9", "#5B8FF9"],
  smooth: true,
  height: 400,
  area: { color: ["#5B8FF9", "#5B8FF9"] },
};
const ColumnData = [
  { day: "Mon", value: 90 },
  { day: "Tue", value: 20 },
  { day: "Wed", value: 60 },
  { day: "Thu", value: 20 },
  { day: "Fri", value: 20 },
  { day: "Sat", value: 80 },
  { day: "Sun", value: 20 },
  { day: "Mon", value: 90 },
  { day: "Tue", value: 20 },
  { day: "Wed", value: 60 },
  { day: "Thu", value: 20 },
  { day: "Fri", value: 20 },
  { day: "Sat", value: 80 },
  { day: "Sun", value: 20 },
];

export const columnConfig = {
  data: ColumnData,
  xField: "day",
  yField: "value",
  seriesField: "type",
  height: 400,
  color: "#1d1f20",
};
export const combineCradsStyle: combineCardsProps = {
  fontSize: "100px",
  color: "rgba(255, 255, 255, 0.3)",
  position: "absolute",
  left: "10px",
  bottom: "10px",
};

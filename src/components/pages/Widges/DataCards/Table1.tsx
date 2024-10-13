import React from "react";
import { Table, Tag } from "antd";
import type { TableProps } from "antd";

interface DataType {
  key: string;
  assigned: string;
  name: number;
  duedate: string;
  Priority: string[];
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Assigned",
    dataIndex: "assigned",
    key: "assigned",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Due Date",
    dataIndex: "duedate",
    key: "duedate",
  },
  {
    title: "Priority",
    key: "priority",
    dataIndex: "priority",
    render: (_, { Priority }) => (
      <>
        {Priority.map((Priority) => {
          let color;
          if (Priority === "Low") {
            color = "#f1c527";
          } else if (Priority === "Lower") {
            color = "#FF6600";
          } else if (Priority === "Medium") {
            color = "#604CC3";
          } else if (Priority === "High") {
            color = "#60d0c0";
          } else if (Priority === "Higher") {
            color = "#36cb43";
          }
          return (
            <Tag color={color} key={Priority}>
              {Priority.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    assigned: "John Brown",
    name: 32,
    duedate: "New York No. 1 Lake Park",
    Priority: ["Low"],
  },
  {
    key: "2",
    assigned: "Jim Green",
    name: 42,
    duedate: "London No. 1 Lake Park",
    Priority: ["Lower"],
  },
  {
    key: "3",
    assigned: "Joe Black",
    name: 32,
    duedate: "Sydney No. 1 Lake Park",
    Priority: ["Medium"],
  },
  {
    key: "4",
    assigned: "Joe Black",
    name: 32,
    duedate: "Sydney No. 1 Lake Park",
    Priority: ["High"],
  },
  {
    key: "5",
    assigned: "Joe Black",
    name: 32,
    duedate: "Sydney No. 1 Lake Park",
    Priority: ["Higher"],
  },
];

const Table1: React.FC = () => (
  <Table<DataType> columns={columns} dataSource={data} pagination={false} />
);

export default Table1;

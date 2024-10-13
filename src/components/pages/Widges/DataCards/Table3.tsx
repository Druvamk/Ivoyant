import React from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";

interface DataType {
  key: React.Key;
  application: string;
  Sales: number;
  AvgPrice: string;
  Total: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Application",
    dataIndex: "application",
  },
  {
    title: "Sales	",
    dataIndex: "Sales",
  },
  {
    title: "Avg. Price",
    dataIndex: "AvgPrice",
  },
  {
    title: "Total",
    dataIndex: "Total",
  },
];

const data: DataType[] = [
  {
    key: "1",
    application: "John Brown",
    Sales: 16300,
    AvgPrice: "$53",
    Total: "$15,652",
  },
  {
    key: "2",
    application: "Jim Green",
    Sales: 26421,
    AvgPrice: "$35",
    Total: "$8,785",
  },
  {
    key: "3",
    application: "Joe Black",
    Sales: 8265,
    AvgPrice: "$98	",
    Total: "$9,652",
  },
  {
    key: "4",
    application: "Joe Black",
    Sales: 10652,
    AvgPrice: "$20",
    Total: "$7,856",
  },
];

const Table3: React.FC = () => (
  <>
    <Table
      columns={columns}
      dataSource={data}
      size="large"
      pagination={false}
    />
  </>
);

export default Table3;

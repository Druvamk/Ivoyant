import { Table } from "antd";
import { columns, data } from "../../../../data";

export default function Table1() {
  return (
    <Table
      columns={columns}
      dataSource={data}
      style={{ width: "100%" }}
      pagination={false}
    />
  );
}

import { Table } from "antd";
import { columns2, data1 } from "../../../../data";

export default function Table2() {
  return (
    <Table
      columns={columns2}
      dataSource={data1}
      style={{ width: "100%" }}
      pagination={false}
      scroll={{ y: 55 * 5 }}
    />
  );
}

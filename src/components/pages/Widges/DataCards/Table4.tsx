import { Table, Avatar, Tag } from "antd";
import avatar from "../../../../assests/avatar.png";
import avatar2 from "../../../../assests/avatar2.png";
import avatar3 from "../../../../assests/avatar3.png";
import avatar4 from "../../../../assests/avatar4.png";
const columns = [
  {
    title: "DUE",
    dataIndex: "due",
    key: "due",
    render: (due: string) => <span>{due}</span>,
  },
  {
    title: "NAME",
    dataIndex: "name",
    key: "name",
    render: (text: string, record: any) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar src={record.avatar} />
        <span style={{ marginLeft: 8 }}>{text}</span>
      </div>
    ),
  },
  {
    title: "POSITION",
    dataIndex: "position",
    key: "position",
  },
];

const data = [
  {
    key: "1",
    due: "12 hours",
    name: "John Deo",
    avatar: "",
    ticketId: "#1183",
    position: "Workaround for OS X selects printing bug",
    description:
      "Chrome fixed the bug several versions ago, thus rendering this...",
  },
  {
    key: "2",
    due: "16 hours",
    name: "Jems Win",
    avatar: "",
    ticketId: "#1249",
    position: "Vertically center carousel controls",
    description:
      "Try any carousel control and reduce the screen width below...",
  },
  {
    key: "3",
    due: "40 hours",
    name: "Jeny William",
    avatar: "",
    ticketId: "#1254",
    position: "Inaccurate small pagination height",
    description: "The height of pagination elements is not consistent with...",
  },
  {
    key: "4",
    due: "12 hours",
    name: "Jems Win",
    avatar: "",
    ticketId: "#1249",
    position: "Vertically center carousel controls",
    description:
      "Try any carousel control and reduce the screen width below...",
  },
];

const Table4 = () => {
  return <Table columns={columns} dataSource={data} pagination={false} />;
};

export default Table4;

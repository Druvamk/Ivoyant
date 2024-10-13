import React from "react";
import { List, Avatar, Typography } from "antd";

const { Text, Link } = Typography;

const data = [
  {
    title: "Up unpacked friendly",
    description: "Video | 14 minutes ago",
    image: "https://example.com/image1.jpg", // Replace with actual image URL
  },
  {
    title: "Up unpacked friendly",
    description: "Video | 14 minutes ago",
    image: "https://example.com/image2.jpg", // Replace with actual image URL
  },
  {
    title: "Up unpacked friendly",
    description: "Video | 14 minutes ago",
    image: "https://example.com/image3.jpg", // Replace with actual image URL
  },
];

const Youtube: React.FC = () => {
  return (
    <div
      style={{
        background: "#fff",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <Text strong style={{ fontSize: "16px" }}>
          Latest Posts
        </Text>
        <Link href="/view-all" style={{ fontSize: "14px" }}>
          View all
        </Link>
      </div>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar shape="square" size={64} src={item.image} />}
              title={<a href="https://example.com">{item.title}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Youtube;

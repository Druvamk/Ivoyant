import Applayout from "./Applayout";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  InfoCircleOutlined,
  AppstoreOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps, Switch, Tooltip } from "antd";
import { useState } from "react";
export default function Sidebar() {
  const [theme, setTheme] = useState<boolean>(false);
  const toggleTheme = (): void => {
    setTheme(!theme);
  };
  const itemsData: MenuProps["items"] = [
    {
      label: (
        <Tooltip title="Go to Home Page">
          <Link to="/">Home</Link>
        </Tooltip>
      ),
      key: "home",
      icon: <HomeOutlined />, // Home icon
    },
    {
      label: (
        <Tooltip title="Go to About Page">
          <Link to="/about">About</Link>
        </Tooltip>
      ),
      key: "about",
      icon: <InfoCircleOutlined />, // Info icon
    },
    {
      label: <Link to="/products">Products</Link>,
      key: "products",
      icon: <AppstoreOutlined />, // Appstore icon for products
      children: [
        {
          label: <Link to="/products/services">Services</Link>,
          key: "services",
        },
        {
          label: <Link to="/products/privacy">Privacy Policy</Link>,
          key: "privacypolicy",
        },
      ],
    },
    {
      label: (
        <Tooltip title="login">
          <Link to="/login">Login</Link>
        </Tooltip>
      ),
      key: "login",
      icon: <LoginOutlined />, // Login icon
    },
  ];
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Menu
        items={itemsData}
        theme={`${theme ? "dark" : "light"}`}
        mode="vertical"
      ></Menu>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          padding: "10px",
          textAlign: "left",
        }}
      >
        <Tooltip title={`Switch to ${theme ? "light" : "dark"} theme`}>
          <Switch
            onChange={toggleTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
        </Tooltip>
      </div>
      <Applayout />
    </div>
  );
}

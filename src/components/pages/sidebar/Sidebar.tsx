import React, { useState } from "react";
import {
  BarChartOutlined,
  BellOutlined,
  CalendarOutlined,
  CommentOutlined,
  DashboardOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  ProductOutlined,
  SearchOutlined,
  SettingOutlined,
  TableOutlined,
  TranslationOutlined,
  UserOutlined,
  WindowsOutlined,
} from "@ant-design/icons";
import "./Sidebar.css";
import { Avatar, Badge, Button, Input, Layout, Menu, theme } from "antd";
import { Divider } from "rc-menu";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const { Header, Sider } = Layout;

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const items = [
    {
      key: "g1",
      label: `${collapsed ? "" : " Dashboard"}`,
      type: "group",
      children: [
        {
          key: "1",
          icon: <DashboardOutlined />,
          label: "Dashboard",
          children: [
            { key: "g1", label: <Link to="default">Default</Link> },
            { key: "g2", label: <Link to="analytics">Analytics</Link> },
            { key: "g3", label: <Link to="invoices">Invoices</Link> },
          ],
        },
        { key: "2", label: "Components", icon: <ProductOutlined /> },
      ],
    },
    {
      key: "3",
      label: `${collapsed ? "" : " Widgets"}`,
      type: "group",
      children: [
        { key: "g4", label: "Statistics", icon: <PieChartOutlined /> },
        { key: "g5", label: "Data", icon: <TableOutlined /> },
        { key: "g6", label: "Charts", icon: <BarChartOutlined /> },
      ],
    },
    {
      key: "4",
      label: `${collapsed ? "" : " Application"}`,
      type: "group",
      children: [
        { key: "g7", label: "Chat", icon: <CommentOutlined /> },
        { key: "g8", label: "Calendar", icon: <CalendarOutlined /> },
        { key: "g9", label: "kanban", icon: <TableOutlined /> },
        {
          key: "5",
          label: "Customers",
          icon: <UserOutlined />,
          children: [
            {
              key: "g10",
              label: "List",
            },
            {
              key: "g11",
              label: "Cards",
            },
          ],
        },
        {
          key: "6",
          label: "Invoice",
          icon: <BarChartOutlined />,
          children: [
            {
              key: "g12",
              label: "Create",
            },
            {
              key: "g13",
              label: "Details",
            },
            {
              key: "g14",
              label: "List",
            },
            {
              key: "g15",
              label: "Edit",
            },
          ],
        },
        {
          key: "7",
          label: "Profile",
          icon: <BarChartOutlined />,
          children: [
            {
              key: "g16",
              label: "User Profile",
            },
            {
              key: "g17",
              label: "Account Profile",
            },
          ],
        },
        {
          key: "8",
          label: "E-Commerce",
          icon: <BarChartOutlined />,
          children: [
            {
              key: "g18",
              label: "Products",
            },
            {
              key: "g19",
              label: "Products Details",
            },
            {
              key: "g20",
              label: "Products List",
            },
            {
              key: "g21",
              label: "Add New Product",
            },
            {
              key: "g22",
              label: "Checkout",
            },
          ],
        },
      ],
    },

    {
      key: "9",
      label: `${collapsed ? "" : " Forms & Tables"}`,
      type: "group",
      children: [
        { key: "g23", label: "Form Validation" },
        { key: "g24", label: "Form Wizard" },
        {
          key: "g25",
          label: "Layout",
          children: [
            { key: "g251", label: "Plugins" },
            { key: "g26", label: "Basic" },
            { key: "g27", label: "Multi Column" },
            { key: "g28", label: "Action Bar" },
            { key: "g29", label: "Sticky Bar" },
          ],
        },
      ],
    },
    {
      key: "10",
      label: "Plugins",
      children: [
        { key: "g30", label: "Mask" },
        { key: "g31", label: "Clipboard" },
        { key: "g32", label: "reCaptcha" },
        { key: "g33", label: "Editor" },
        { key: "g34", label: "Dropzone" },
      ],
    },
    {
      key: "12",
      label: "MUI Table",
      children: [
        { key: "g35", label: "Basic" },
        { key: "g36", label: "Dense" },
        { key: "g37", label: "Enhanced" },
        { key: "g38", label: "Datatable" },
        { key: "g39", label: "Custom" },
        { key: "g40", label: "Fixed Header" },
        { key: "g41", label: "Collapse" },
      ],
    },
    {
      key: "11",
      label: "React Table",
      children: [
        { key: "g35", label: "Basic" },
        { key: "g36", label: "Dense" },
        { key: "g37", label: "Sorting" },
        { key: "g38", label: "Filtering" },
        { key: "g39", label: "Pagination" },
        { key: "g40", label: "Row Selection" },
        { key: "g41", label: "Expanding" },
        { key: "g42", label: "Grouping" },
        { key: "g43", label: "Editable" },
        { key: "g44", label: "Drag & Drop" },
        { key: "g45", label: "Column Visibilitys" },
        { key: "g46", label: "Column Resizing" },
        { key: "g47", label: "Sticky" },
        { key: "g48", label: "Umbrella" },
        { key: "g49", label: "Empty" },
        { key: "g50", label: "Virtualized" },
      ],
    },
    {
      key: "12",
      label: `${collapsed ? "" : " Charts & Maps"}`,
      type: "group",
      children: [
        {
          key: "g4",
          label: "Charts",
          icon: <PieChartOutlined />,
          children: [
            { key: "g51", label: "Apexchart" },
            { key: "g52", label: "Origanization Chart" },
          ],
        },
        { key: "g53", label: "Map", icon: <TableOutlined /> },
        { key: "g54", icon: <Divider /> },
        { key: "g55", label: "Sample Page", icon: <TableOutlined /> },
      ],
    },
    {
      key: "13",
      label: `${collapsed ? "" : " Pages"}`,
      type: "group",
      children: [
        {
          key: "g56",
          label: "Authentication",
          children: [
            {
              key: "g57",
              label: "Login",
            },
            {
              key: "g58",
              label: "Register",
            },
            {
              key: "g59",
              label: "Forgot Password",
            },
            {
              key: "g60",
              label: "Reset Password",
            },
            {
              key: "g61",
              label: "Check Mail",
            },
            {
              key: "g62",
              label: "Code Verificat",
            },
          ],
        },

        {
          key: "g63",
          label: "Maintaince",
          children: [
            {
              key: "g64",
              label: "404",
            },
            {
              key: "g65",
              label: "500",
            },
          ],
        },
        {
          key: "g63",
          label: "Contact Us",
        },
        {
          key: "g63",
          label: "Pricing",
        },
      ],
    },
    {
      key: "14",
      icon: <Divider />,
    },

    {
      key: "15",
      label: "Menu Levels",
      children: [
        {
          key: "g4",
          label: "Level 1",
        },
        {
          key: "g4",
          label: "levels",
        },
      ],
    },
    {
      key: "14",
      label: "Sub Caption Levels",
      children: [
        {
          key: "g4",
          label: "Level 1",
        },
        {
          key: "g4",
          label: "levels",
        },
      ],
    },

    {
      key: "15",
      label: "Disable Menu",
      disabled: true,
    },

    {
      key: "16",
      label: "Oval Chip",
    },

    {
      key: "17",
      label: "Documentation",
    },

    {
      key: "18",
      label: "RoadMap",
    },
  ];
  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
          position: "sticky",
          background: colorBgContainer,
        }}
      >
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            height: "100vh",
            overflowY: "auto",
            overflowX: "hidden",
          }}
          className="sider-scrollbar active"
        >
          <Header
            style={{
              background: colorBgContainer,
              padding: 0,
            }}
          >
            <div>efvefrv</div>
          </Header>

          <div className="demo-logo-vertical" />
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={items}
          />
        </Sider>
        <Layout style={{ padding: "0", position: "sticky" }}>
          <Header
            style={{
              padding: 0,
              background: "#fff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Collapse Button */}
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{ marginLeft: "16px" }}
            />
            <Input
              placeholder="Ctrl + K"
              prefix={<SearchOutlined />}
              style={{
                width: 200,
                borderRadius: 4,
                padding: "4px 8px",
                fontSize: "14px",
                marginLeft: "16px",
              }}
            />

            {/* Navigation Menu */}
            <Menu
              theme="light"
              mode="horizontal"
              style={{ flex: 1, justifyContent: "flex-end" }}
              items={[
                {
                  key: "1",
                  label: <WindowsOutlined style={{ fontSize: "15px" }} />,
                },
                {
                  key: "1",
                  label: <TranslationOutlined style={{ fontSize: "15px" }} />,
                },
                {
                  key: "1",
                  label: (
                    <Badge count={2} color="#1890ff">
                      <BellOutlined style={{ fontSize: "15px" }} />
                    </Badge>
                  ),
                },
                {
                  key: "1",
                  label: <MailOutlined style={{ fontSize: "15px" }} />,
                },
                {
                  key: "2",
                  label: <SettingOutlined style={{ fontSize: "15px" }} />,
                },
                {
                  key: "3",
                  icon: <Avatar icon={<UserOutlined />} />,
                  label: "JWT User",
                },
              ]}
            />
          </Header>

          {/* Main Content */}
          <Layout>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default Sidebar;

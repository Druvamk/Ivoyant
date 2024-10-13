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
import "./Sidebar.scss";
import { Avatar, Badge, Button, Input, Layout, Menu, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import SvgPhoto from "../../../SvgPhoto";
import { ItemType, MenuItemType } from "antd/es/menu/interface";

const { Header, Sider } = Layout;

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const items: ItemType<MenuItemType>[] = [
    {
      key: "g1",
      label: collapsed ? "" : "Dashboard",
      type: "group",
      children: [
        {
          key: "1",
          icon: <DashboardOutlined />,
          label: "Dashboard",
          children: [
            { key: "g1-1", label: <Link to="default">Default</Link> },
            { key: "g1-2", label: <Link to="analytics">Analytics</Link> },
            { key: "g1-3", label: "Invoices" },
          ],
        },
        { key: "2", label: "Components", icon: <ProductOutlined /> },
      ],
    },
    {
      key: "g2",
      label: collapsed ? "" : "Widgets",
      type: "group",
      children: [
        {
          key: "g2-1",
          label: <Link to="statistics">Statistics</Link>,
          icon: <PieChartOutlined />,
        },
        {
          key: "g2-2",
          label: <Link to="data">Data</Link>,
          icon: <TableOutlined />,
        },
        {
          key: "g2-3",
          label: <Link to="charts">Charts</Link>,
          icon: <BarChartOutlined />,
        },
      ],
    },
    {
      key: "g3",
      label: collapsed ? "" : "Application",
      type: "group",
      children: [
        { key: "g3-1", label: "Chat", icon: <CommentOutlined /> },
        { key: "g3-2", label: "Calendar", icon: <CalendarOutlined /> },
        { key: "g3-3", label: "Kanban", icon: <TableOutlined /> },
        {
          key: "g3-4",
          label: "Customers",
          icon: <UserOutlined />,
          children: [
            { key: "g3-4-1", label: "List" },
            { key: "g3-4-2", label: "Cards" },
          ],
        },
        {
          key: "g3-5",
          label: "Invoice",
          icon: <BarChartOutlined />,
          children: [
            { key: "g3-5-1", label: "Create" },
            { key: "g3-5-2", label: "Details" },
            { key: "g3-5-3", label: "List" },
            { key: "g3-5-4", label: "Edit" },
          ],
        },
        {
          key: "g3-6",
          label: "Profile",
          icon: <BarChartOutlined />,
          children: [
            { key: "g3-6-1", label: "User Profile" },
            { key: "g3-6-2", label: "Account Profile" },
          ],
        },
        {
          key: "g3-7",
          label: "E-Commerce",
          icon: <BarChartOutlined />,
          children: [
            { key: "g3-7-1", label: "Products" },
            { key: "g3-7-2", label: "Products Details" },
            { key: "g3-7-3", label: "Products List" },
            { key: "g3-7-4", label: "Add New Product" },
            { key: "g3-7-5", label: "Checkout" },
          ],
        },
      ],
    },
    {
      key: "g4",
      label: collapsed ? "" : "Forms & Tables",
      type: "group",
      children: [
        { key: "g4-1", label: "Form Validation" },
        { key: "g4-2", label: "Form Wizard" },
        {
          key: "g4-3",
          label: "Layout",
          children: [
            { key: "g4-3-1", label: "Plugins" },
            { key: "g4-3-2", label: "Basic" },
            { key: "g4-3-3", label: "Multi Column" },
            { key: "g4-3-4", label: "Action Bar" },
            { key: "g4-3-5", label: "Sticky Bar" },
          ],
        },
      ],
    },
    {
      key: "g5",
      label: "Plugins",
      children: [
        { key: "g5-1", label: "Mask" },
        { key: "g5-2", label: "Clipboard" },
        { key: "g5-3", label: "reCaptcha" },
        { key: "g5-4", label: "Editor" },
        { key: "g5-5", label: "Dropzone" },
      ],
    },
    {
      key: "g6",
      label: "MUI Table",
      children: [
        { key: "g6-1", label: "Basic" },
        { key: "g6-2", label: "Dense" },
        { key: "g6-3", label: "Enhanced" },
        { key: "g6-4", label: "Datatable" },
        { key: "g6-5", label: "Custom" },
        { key: "g6-6", label: "Fixed Header" },
        { key: "g6-7", label: "Collapse" },
      ],
    },
    {
      key: "g7",
      label: "React Table",
      children: [
        { key: "g7-1", label: "Basic" },
        { key: "g7-2", label: "Dense" },
        { key: "g7-3", label: "Sorting" },
        { key: "g7-4", label: "Filtering" },
        { key: "g7-5", label: "Pagination" },
        { key: "g7-6", label: "Row Selection" },
        { key: "g7-7", label: "Expanding" },
        { key: "g7-8", label: "Grouping" },
        { key: "g7-9", label: "Editable" },
        { key: "g7-10", label: "Drag & Drop" },
        { key: "g7-11", label: "Column Visibility" },
        { key: "g7-12", label: "Column Resizing" },
        { key: "g7-13", label: "Sticky" },
        { key: "g7-14", label: "Virtualized" },
      ],
    },
    {
      key: "g8",
      label: collapsed ? "" : "Charts & Maps",
      type: "group",
      children: [
        {
          key: "g8-1",
          label: "Charts",
          icon: <PieChartOutlined />,
          children: [
            { key: "g8-1-1", label: "Apexchart" },
            { key: "g8-1-2", label: "Organization Chart" },
          ],
        },
        { key: "g8-2", label: "Map", icon: <TableOutlined /> },
        { key: "g8-3", label: "Sample Page", icon: <TableOutlined /> },
      ],
    },
    {
      key: "g9",
      label: collapsed ? "" : "Pages",
      type: "group",
      children: [
        {
          key: "g9-1",
          label: "Authentication",
          children: [
            { key: "g9-1-1", label: "Login" },
            { key: "g9-1-2", label: "Register" },
            { key: "g9-1-3", label: "Forgot Password" },
            { key: "g9-1-4", label: "Reset Password" },
            { key: "g9-1-5", label: "Check Mail" },
            { key: "g9-1-6", label: "Code Verification" },
          ],
        },
        {
          key: "g9-2",
          label: "Maintenance",
          children: [
            { key: "g9-2-1", label: "404" },
            { key: "g9-2-2", label: "500" },
          ],
        },
        { key: "g9-3", label: "Contact Us" },
        { key: "g9-4", label: "Pricing" },
      ],
    },
    {
      key: "g10",
      label: "Menu Levels",
      children: [{ key: "g10-1", label: "Level 1" }],
    },
    { key: "g11", label: "Documentation" },
    { key: "g12", label: "RoadMap" },
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
          className="sider-scrollbar active sidebar"
        >
          <Header
            style={{
              background: colorBgContainer,
              padding: 0,
              position: "sticky",
              top: 0,
              zIndex: 1,
            }}
          >
            <SvgPhoto />
          </Header>

          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={items}
          />
        </Sider>
        <Layout style={{ padding: "0" }}>
          <Header
            style={{
              padding: 0,
              background: "#fff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              position: "sticky",
              zIndex: 1,
              top: 0,
              backgroundColor: colorBgContainer, // Ensure it stays at the top of the viewport
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
                  key: "2",
                  label: <TranslationOutlined style={{ fontSize: "15px" }} />,
                },
                {
                  key: "3",
                  label: (
                    <Badge count={2} color="#1890ff">
                      <BellOutlined style={{ fontSize: "15px" }} />
                    </Badge>
                  ),
                },
                {
                  key: "4",
                  label: <MailOutlined style={{ fontSize: "15px" }} />,
                },
                {
                  key: "5",
                  label: <SettingOutlined style={{ fontSize: "15px" }} />,
                },
                {
                  key: "6",
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

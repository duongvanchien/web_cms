import {Avatar, Dropdown, Layout, Menu, Row} from "antd";
import React from "react";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {currentUser} from "../Redux/slices/userSlice";
import "../Styles/header.css";

const {Header} = Layout;

const HeaderPage = () => {
  const history = useHistory();
  const user = useSelector(currentUser);
  const menu = (
    <Menu>
      <Menu.Item style={{padding: "0.3rem 1.5rem"}} key={0}>
        Đổi mật khẩu
      </Menu.Item>
      <Menu.Item style={{padding: "0.3rem 1.5rem", color: "red"}} onClick={() => history.push("/")} key={1}>
        Đăng xuất
      </Menu.Item>
    </Menu>
  );

  return (
    <Header
      className='site-layout-background site-layout-avatar'
      style={{
        padding: 0,
        // background: "#343a40",
        background: "#3c8dbc",
        position: "sticky",
        top: 0,
        zIndex: 1,
      }}
    >
      <Row className='header-avatar'>
        <Dropdown overlay={menu} placement='bottomRight' arrow>
          <a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
            <Avatar size={40}>{user && user.username?.charAt(0)}</Avatar>
          </a>
        </Dropdown>
      </Row>
    </Header>
  );
};

export default HeaderPage;

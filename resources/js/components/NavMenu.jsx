import React,{useCallback, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {
    HomeOutlined,
    ContactsOutlined,
    UserOutlined,
    UserAddOutlined,
    UserDeleteOutlined,
    UserSwitchOutlined,
  } from '@ant-design/icons';

import {Menu} from 'antd';
const {SubMenu} = Menu;

export const NavMenu = (props) => {
    return (
      <Menu theme={props.dark?"dark":"light"}>
        <Menu.Item key="0" icon={<HomeOutlined/>}>
          <Link to="/">Home</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined/>} title="Account">
            <Menu.Item key="2" icon={<UserSwitchOutlined />} disabled>Login</Menu.Item>
            <Menu.Item key="3" icon={<UserAddOutlined />} disabled>Register</Menu.Item>
          </SubMenu>
          </Menu>
    );
}
export default NavMenu;
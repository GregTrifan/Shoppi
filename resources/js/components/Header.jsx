import React,{useState} from 'react';
import {Layout,Button,Drawer,Tooltip} from 'antd';
import {useSelector} from "react-redux";
import {
    MenuOutlined,
  } from '@ant-design/icons';
import {Link} from "react-router-dom"; 
import {
  selectUser
} from "../storage/user";
import NavMenu from './NavMenu';
export const Header = () => {
    const user = useSelector(selectUser);
    
    const [sider,setSider] = useState(false);
    return (
        <Layout.Header className="header">
        <Button
        className="menu"
        type="primary"
        size="large"
        icon={<MenuOutlined />}
        style={{marginTop:"13"}}
        onClick={() => setSider(true)}
        ghost
      />
      <Drawer
      title="Menu"
      placement="left"
      onClose={() => setSider(false)}
      visible={sider}>
        <NavMenu dark={true}/>
      </Drawer>
      <Link to="/">
      <Tooltip placement="bottom" title={`Hello ${user}`}>
      <img className="logo" height="52px" witdh="52px" alt="" src='/Logo.png'/>
      </Tooltip>
      </Link>
      </Layout.Header>
    );
}
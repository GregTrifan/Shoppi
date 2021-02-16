import React,{useState,useEffect,useCallback} from 'react';
import {Layout,Button,Drawer,Tooltip} from 'antd';
import {
    MenuOutlined,
  } from '@ant-design/icons';
import {Link} from "react-router-dom"; 
import NavMenu from './NavMenu';
export const Header = () => {
    const [sider,setSider] = useState(false);
    const [Greeting,setGreeting]= useState("Hello Guest"); 
    const connect = async () => {
      const res = await fetch("api/account");
      return await res.json();
    }
    const checkAccount = useCallback(async ()=> {
      const result = await connect();
      if (result.isLoggedIn) {
        setGreeting(`Hello ${result.username}`)
      }
    });
    useEffect(async() => {
      checkAccount();
    },[checkAccount]);
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
      <Tooltip placement="bottom" title={Greeting}>
      <img className="logo" height="52px" witdh="52px" alt="" src='Logo.png'/>
      </Tooltip>
      </Link>
      </Layout.Header>
    );
}
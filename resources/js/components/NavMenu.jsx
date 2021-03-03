import React,{ useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";
import {
    HomeOutlined,
    UserOutlined,
    UserAddOutlined,
    UserDeleteOutlined,
    UserSwitchOutlined,
  } from '@ant-design/icons';
import {
    selectUser
  } from "../storage/user";
import {Menu} from 'antd';
import {Login} from './auth/Login';
import {Register} from './auth/Register';
import {Logout} from './auth/Logout';
const {SubMenu} = Menu;

export const NavMenu = (props) => {
  const user = useSelector(selectUser)

  // Modal Hooks
  const [visRegister,setVisRegister] = useState(false);
  const [visLogin,setVisLogin] = useState(false);
  const [visLogout,setVisLogout] = useState(false);


  // Modal Events 
  const CloseForms= () => {
    setVisLogin(false);
    setVisRegister(false);
    setVisLogout(false);
  }
  const showLogout=() => {
    setVisLogout(true);
  }
  const showLogin = () => {
    setVisLogin(true);
  };
  const showRegister = () => {
    setVisRegister(true);
  };

// Components based on account status
const RenderOpt = () => {
  if (user === "Guest") {
    return (
      <>
       <Menu.Item key="2" icon={<UserSwitchOutlined />} onClick={showLogin}>Login</Menu.Item>
       <Menu.Item key="3" icon={<UserAddOutlined />} onClick={showRegister}>Register</Menu.Item>
      </>
    )
  }
  else {
  return (
    <Menu.Item key="4" icon={<UserDeleteOutlined />} onClick={showLogout}>Logout</Menu.Item>
  )
  }
}
    return (
      <Menu theme={props.dark?"dark":"light"}>
        <Menu.Item key="0" icon={<HomeOutlined/>}>
          <Link to="/">Home</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined/>} title="Account">
               {RenderOpt()}
          </SubMenu>
          <Login visible={visLogin}  close={CloseForms}/>
          <Register visible={visRegister} close={CloseForms}/>
          <Logout visible={visLogout} close={CloseForms}/>
          </Menu>
    );
}
export default NavMenu;
import React from 'react';
import {
   Layout,
} from 'antd';
import NavMenu from "./NavMenu";

export const  Navbar = () => {
  return (
    
    <Layout.Sider
    className="sidebar"
    breakpoint={"lg"}
    collapsedWidth={0}
    trigger={null}
    >
      <NavMenu dark={false}/>
    </Layout.Sider>
  );
}

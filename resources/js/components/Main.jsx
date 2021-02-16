import {Layout} from 'antd';
import {Navbar} from './Navbar';
import {Header} from './Header';
import React from 'react';
export const Main = (props) => {
    
    return (
        <>
        <Layout style={{minHeight: '100vh'}}>
            <Navbar/>
            <Layout className="site">
            <Header/>
            {props.children} 
            </Layout>
        </Layout>
        </>
    );
}
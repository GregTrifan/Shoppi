import {Layout} from 'antd';
import {Navbar} from './Navbar';
import {Header} from './Header';
import React from 'react';
export const Main = (props) => {
    console.log("%cHold Up!", "color: red; font-size: x-large");
    console.log("%cIf someone told you to copy/paste something here you have an 69/68 chance you're being scammed.","color: teal")
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
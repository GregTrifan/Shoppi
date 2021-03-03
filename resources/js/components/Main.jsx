import React, { useEffect,useCallback } from 'react';
import {Layout} from 'antd';
import {Navbar} from './Navbar';
import {Header} from './Header';
import {useDispatch} from "react-redux";
import Account from "../services/account";
import {
    store
  } from "../storage/user";

export const Main = (props) => {
    const dispach=useDispatch();

    const checkAccount = useCallback(async ()=> {
        const result = await Account();
        if (result!=="Guest") {
          dispach(store(String(result.name)));
        }
      });

    useEffect(()=> {
        checkAccount();
    },[])
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
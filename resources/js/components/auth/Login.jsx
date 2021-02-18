import React, { useCallback } from "react";
import Cookie from "universal-cookie";
import apiClient from '../../services/apiClient';
import axios from "axios";
import {
    Modal,
    Button,
    Form,
    Input,
    Checkbox,
    message
 } from 'antd';
 import {
   UserOutlined,
 } from '@ant-design/icons';

export const Login = (props) => {
  const cookies = new Cookie();
  const connect = async (email,passwd) => {
    const Body = {
      email: email,
      password: passwd
    }
    await apiClient.get('/sanctum/csrf-cookie');
    const Res = await apiClient.post('/api/login', Body)
    console.log(Res.data.token);
    return Res.data;
  
  }
    const [Login] = Form.useForm();
    const handleLogin=useCallback(async ({email,password}) => {
        const result = await connect(email,password);
        console.log(result);
        if (result.status==="User login successfully.") {
          // Success
          cookies.set("account",result.token);
          message.success("Logged in sucessfully!");
          props.close();
          Login.resetFields();
          setTimeout(()=> {
            window.location.reload();
          },600);
        }

        if (result.status=="Unauthorised") {
          // Failure
          message.error('Please Check your credentials');
        }
        // Extreme situations
        if (result.err) {
          message.error("Some internal problems...");
        }
        
        
      });
      const handleCancel= () => {
        props.close();
        Login.resetFields();
    }
    return (
        <Modal
            closable={false}
            visible={props.visible}
            destroyOnClose={true}
            title={<span><UserOutlined/> Login</span>}
            onCancel={handleCancel}
            
            footer={[
              <Button key="back" form="login" onClick={handleCancel}>
              Return
            </Button>,
            <Button key="submit" form="login" htmlType="submit" type="primary">
              Login
            </Button>,
            ]}
          >
            <Form
            name="login"
            form={Login}
            onFinish={handleLogin}
            initialValues={{
              remember: true,
            }}
            >
              <Form.Item
              label="Email"
              name="email"
              
              rules={[
                {
                required:true,
                message:"Please type your email!",
                }
              ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
              label="Password"
              name="password"
              
              rules={[
                {
                required:true,
                message:"Please write your password!",
                }
              ]}
              >
                <Input.Password/>
              </Form.Item>
            </Form>
      </Modal>
    );
}
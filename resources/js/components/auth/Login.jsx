import React, { useCallback } from "react";
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

  const connect = async (email,passwd) => {
    const Body = {
      email: email,
      password: passwd
    }
    await apiClient.get('/sanctum/csrf-cookie');
    let res = await apiClient.post('api/login', Body);
    console.log(res.data);
    return res.data;
  }
    const [Login] = Form.useForm();
    const handleLogin=useCallback(async ({email,password}) => {
        const result = await connect(email,password);
        if (result.status==="User login successfully.") {
          // Success
          message.success("Logged in sucessfully!");
          props.close();
          Login.resetFields();
          setTimeout(()=> {
            window.location.reload();
          },600);
        }

        if (result.status==="Invalid username/password"|| result.status==="Wrong login information") {
          // Failure
          message.error('Please Check your credentials');
        }
        // Warns about lenght
        if (result.status==="\"email\" length must be at least 3 characters long") {
          message.warn("The email must be at least 3 characters");
        }
        if (result.status==="\"password\" length must be at least 6 characters long") {
          message.warn("The password must be at least 6 characters");
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
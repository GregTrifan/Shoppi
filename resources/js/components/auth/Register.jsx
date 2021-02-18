import React, { useCallback } from 'react';
import {
   Modal,
   Button,
   Form,
   Input,
   message,
} from 'antd';
import {
  UserAddOutlined,
} from '@ant-design/icons';


export const Register = (props) => {
    const [Register] = Form.useForm();

    const connect = (uname,email,passwd) => {
      const Body = {
        email: email,
        username: uname,
        password: passwd
      }
      console.log(JSON.stringify(Body));
      return fetch('api/register',{method:"POST",body:JSON.stringify(Body)})
                .then((res) => res.json())
                .catch(()=>{return {err:"Can't fetch"}});
    }

    const handleRegister= useCallback(async ({username,email,password}) => { 
      // Handle registering
        const result = await connect(username,email,password);
        // Successful Register 
        if (result.status==="User Stored Successfully") {
          message.success("User Registered Successfully!!");
          props.close();
          Register.resetFields();
        }
        // Errors Within the form
        if (result.status==="\"email\" length must be at least 3 characters long") {
          message.warn("Email must be at least 3 characters long");
        }
        if (result.status==="\"password\" length must be at least 6 characters long") {
          message.warn("Password must be at least 6 characters long");
        }
        if (result.status==="\"username\" length must be at least 3 characters long") {
          message.warn("The Username must be at least 3 characters long");
        }

        // User already existing
        if (result.status.includes("username_1 dup key")) {
          message.error("Username already used");
        }
        if (result.status.includes("email_1 dup key")) {
          message.error("Email already used");
        }
        // Extreme cases
        if (result.err) {
          message.error("Some internal problems...");
        }
      });

    const handleCancel= () => {
        props.close();
        Register.resetFields();
    }
    return(
        <Modal
            closable={false}
            visible={props.visible}
            destroyOnClose={true}
            title={<span><UserAddOutlined /> Register</span>}
            onCancel={handleCancel}
            footer={[
              <Button key="back" form="register" onClick={handleCancel}>
              Cancel
            </Button>,
            <Button key="register" form="register" htmlType="submit" type="primary">
              Register
            </Button>,
            ]}
          >
            <Form
            name="register"
            form={Register}
            onFinish={handleRegister}
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
                <Input/>
              </Form.Item>
              <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                required:true,
                message:"Please type your username!",
                }
              ]}
              >
                <Input/>
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
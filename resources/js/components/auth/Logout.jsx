import React from "react";
import {
    UserDeleteOutlined
  } from '@ant-design/icons';
import {Modal,Button,message} from "antd";

  export const Logout=({visible,close}) => {
      const connect = async() => {
          const res = await fetch("api/logout");
          return await res.json();
      }
      const LeaveSession=async () => {
       await connect();
      message.success("Logged out sucessfully")
       close();
       setTimeout(()=> {
        window.location.reload();
      },600);
      }
      const handleCancel = () => {
          close();
      }
    return (
        <Modal
        closable={false}
        visible={visible}
        destroyOnClose={true}
        title={<span><UserDeleteOutlined/> Logout</span>}
        onCancel={handleCancel}
        footer={[
          <Button key={1} onClick={handleCancel}>
              Return
          </Button>,
            <Button key={2} type="primary" onClick={LeaveSession}>
            Yes, sign me out
          </Button>
            ]}
            >
              <p>Are you sure you want to sign out?</p>
        </Modal>
    )
    
  }
import React from "react";
import {
    UserDeleteOutlined
  } from '@ant-design/icons';
import {Modal,Button,message} from "antd";
import Out from "../../services/logout";
  export const Logout=({visible,close}) => {
      const LeaveSession=async () => {
       const leave = await Out();
       if (leave.msg=="Logged out") {
        message.success("Logged out sucessfully");
       };
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
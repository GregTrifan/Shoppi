import {Typography,Card} from "antd";
import React from "react";
import Restricted from "../components/auth/Restricted";
import Tops from "../components/Tops";
const {Title} = Typography;
const Admin = () => {

    return (
    <Restricted>
        <Card style={{width:"400px",height:"500px",float:"right",margin:"20px"}}>
        <Title>Top 5 Most viewed Products</Title>
        <Tops/>
        </Card>
        <Card style={{width:"400px",height:"500px",float:"right",margin:"20px", float:"right"}}>
        <Title>Top 5 Most viewed Products</Title>
        <Tops/>
        </Card>
    </Restricted>
    );
};

export default Admin;
import React, { useCallback, useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import Skeletons from "../components/Skeletons";
import { Card,Layout } from "antd";
import { Redirect } from "react-router-dom";

const {Content} = Layout;
const Product = (routerProps) => {
  const product = routerProps.match.params.name;
  const [data,setData] = useState({});
  const [loaded,setLoad] = useState(false);
  const getInfo = useCallback(async () => {
    try {
      const {data} = await apiClient.get(`/api/products/show/${product}`);
      setData(data);
      setLoad(true);
    }
    catch {
      setData("fail");
    }
  },[]);
  const renderData = () => (
    <Card style={{margin:"20px"}}>
      Name - {data.name}<br/>
      Description - {data.description}
    </Card>
  )
  useEffect(()=> {
    getInfo();
  },[]);
  const Res = loaded?renderData:Skeletons;
    return (
      <Content>
        <Res/>
        {data==="fail"?<Redirect to="/"/>:null}
      </Content>
    );
}
export default Product;
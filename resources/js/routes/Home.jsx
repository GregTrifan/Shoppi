import {Typography,Skeleton,Row,Card,Col,Pagination} from "antd";
import apiClient from "../services/apiClient";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
const {Title} = Typography;
export const Home = () => {
    const [products,setProds]=useState([]);
    const [page,setPage]=useState(1);
    const [max,setMax]=useState(1);
    const [loaded,setLoad]=useState(true);
    const getData = useCallback(async (page) => {
        const res = await apiClient.get(`api/products?page=${page}`);
        let Data = res.data;
        setProds(Data.data);
        setPage(Data.current_page);
        setMax(Data.last_page);
        setLoad(false);
    },[]);
    const RenderData = ()=> {
        return products.map((product,index)=>(
                    <Col key={index} xs={{span:24}} md={{span:12}} lg={{span:6}}>
                    <Card 
                    title={<Link to={`/product/${product.name}`}>{product.name} </Link>}
                    bordered={false} style={{borderRadius:"15px"}}>
                        {product.description}
                    </Card>
                    </Col>
    ))}
    const Rows = () => {
        return (
            <>
            <Row gutter={[8,{xs:8,sm:16,md:24,lg:32}]} gutter={[16, 16]}>
                <RenderData/>
            </Row>
            
            </>
        )
    }
    
    const Loader = () => {
        return (<>
        <Skeleton active/><Skeleton active/>
        <Skeleton active/><Skeleton active/>
        <Skeleton active/>
        </>)
    };
    useEffect(()=> {
        setLoad(true);
        getData(page)
    },[page]);
    const List = loaded?Loader:Rows;
    return (
        <div style={{textAlign:"center",padding:"10px"}}>
            <Title>Home</Title>
            <List/>
            <div style={{padding:"60px"}}>
                <Pagination simple current={page} onChange={(page)=>setPage(page)} total={max*10}/>
            </div>
        </div>
    )
} 


import React, { useCallback, useEffect, useState } from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import apiClient from "../services/apiClient";

const Tops = () => {
    const [data,setData] = useState([]);
    const setter = useCallback(async() => {
      const res = await apiClient("/api/products/top10");
      console.log(res);
      setData(res.data);
    },[]) 
    useEffect(()=> {
      setter();
    },[])
    return(
        <PieChart width={400} height={400}>
        <Pie
          dataKey="view_count"
          startAngle={360}
          endAngle={0}
          data={data}
          cx={200}
          cy={200}
          innerRadius={40}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
        <Tooltip
          contentStyle={{ backgroundColor: "black" }}
          itemStyle={{ color: "whitesmoke" }}
        />
      </PieChart>
    );
}
export default Tops;
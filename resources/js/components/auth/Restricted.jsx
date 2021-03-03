import React, {useEffect,useState} from "react";
import Skeletons from "../Skeletons";
import {selectUser} from "../../storage/user";
import {useSelector} from "react-redux";
const Restricted = (props) => {
  const Page = props.children;
    const [loading,setLoaded] = useState(true)
    const user = useSelector(selectUser);
    const checkAccount = ()=> {
        if (user!=="Guest") {
          setLoaded(false);
        }
      };
      useEffect(() => {
          checkAccount();
      },[user]);
    return (
        <>
        {loading?Skeletons:Page}
        </>
    );
}
export default Restricted;
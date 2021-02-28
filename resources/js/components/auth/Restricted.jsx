import React, {useEffect,useCallback,useState} from "react";
import Account from "../../services/account";
import Skeletons from "../Skeletons";

const Restricted = ({children}) => {
    const [loading,setLoaded] = useState(true)
    const checkAccount = useCallback(async ()=> {
        const result = await Account();
        if (result!=="Guest") {
          setLoaded(false);
        }
        else {
            window.location.href="/";
        }
      });
      useEffect(async() => {
        checkAccount();
      },[]);
      console.log(loading);
      const Res = loading?Skeletons:children;
    return (
        <>
        {Res}
        </>
    );
}
export default Restricted;
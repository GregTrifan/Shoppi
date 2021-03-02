import React, {useEffect,useCallback,useState} from "react";
import Account from "../../services/account";
import Skeletons from "../Skeletons";

const Restricted = (props) => {
  const Page = props.children;
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
    return (
        <>
        {loading?Skeletons:Page}
        </>
    );
}
export default Restricted;
import axios from "axios"
import Cookies from "universal-cookie";
import {message} from "antd";
async function Out() {
    const cookies = new Cookies();
    let token = cookies.get("account");
    const Client = axios.create({
        withCredentials: true,
        headers: {
            "Accept":"application-json",
            "X-Requested-With":"XMLHttpRequest",
            authorization:`Bearer ${token}`
        }
        });
    
    console.log(token)
    try {
        await Client.get('/sanctum/csrf-cookie');
        const status = await  Client.post("/api/logout");
        cookies.remove("account");
        console.log(status)
        return status.data;
    }
    catch {
        console.log("Nope");
        cookies.remove("account");
        message.warn("Are you surely logged in? 🤔");
    }
    

}
export default Out;
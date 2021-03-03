import axios from "axios";
import Cookies from "universal-cookie";

async function Account() {
    const cookies = new Cookies();
    let token = cookies.get("account");
    if (!token) return "Guest";
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
        const status = await  Client.get("/api/account");
        return status.data;
    }
    catch {
        console.log("OUT Sir");
        cookies.remove("account");
        window.location.reload();
        return "Guest";
    }
    

}
export default Account;
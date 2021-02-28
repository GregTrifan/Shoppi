import axios from "axios";
import Cookies from "universal-cookie";

async function authy() {
    const cookies = new Cookies();
    let token = cookies.get("account");
    if (!token) return "Fail";
    const Client = axios.create({
    withCredentials: true,
    headers: {
        "Accept":"application-json",
        "X-Requested-With":"XMLHttpRequest",
        authorization:`Bearer ${token}`
    }
    });
    return Client;
}
export default authy;
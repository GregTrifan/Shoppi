import axios from 'axios';

const apiClient = axios.create({
    withCredentials: true,
    headers: {
        "Accept":"application-json",
        "X-Requested-With":"XMLHttpRequest"
    }
});

export default apiClient;
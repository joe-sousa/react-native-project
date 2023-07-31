import axios from "axios";

const api2 = axios.create(
    {
        baseURL: "https://picsum.photos/"
    }
);

export default api2;
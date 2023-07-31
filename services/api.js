import axios from "axios";

const api = axios.create(
    {
        baseURL: "https://hn.algolia.com"
    }
);

export default api;
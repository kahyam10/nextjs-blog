import axios from "axios";

const Api = axios.create({
    // baseURL:"http://localhost:3333",
    baseURL:"http://45.178.182.24:3333/",
})

export default Api;
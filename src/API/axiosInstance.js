import * as axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "85edc69a-85d3-4b72-8be1-8c15c1b24a38"
    }
});
import * as axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "c6b9a978-34dd-4557-bcc4-8a9f277be075"
    }
});
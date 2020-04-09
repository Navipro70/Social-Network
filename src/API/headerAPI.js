import {axiosInstance} from "./axiosInstance";
import * as axios from "axios";


export const headerApi = {
    getCureentUserProfile() {
        return axiosInstance.get(`auth/me`)
            .then(response => response.data.data)
    }
}
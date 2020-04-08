import {axiosInstance} from "./axiosInstance";
import * as axios from "axios";

export const profileApi = {
    getUser(userId) {
        return axiosInstance(`profile/${userId}`)
            .then(response => response.data)
    },
};
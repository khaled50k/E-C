import API from "./API";
import axios from "axios";
const { url, cookie } = API;
export default {
  loginAuth(data) {
    return axios({
      method: "post",
      baseURL: url + "/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
      maxBodyLength: Infinity,
    });
  },
  registerAuth(data) {
    return axios({
      method: "post",
      baseURL: url + "/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
      maxBodyLength: Infinity,
    });
  },
  getCurrentUserData() {
    return axios({
      method: "post",
      baseURL: url + "/",
      headers: {
        token: `Bearer ${cookie}`,
      },
      maxBodyLength: Infinity,
    });
  },
};

import API from "./API";
import axios from "axios";
const { url, cookie } = API;
export default {
  getUsers() {
    return axios({
      method: "get",
      baseURL: url + "/",
      headers: {
        token: `Bearer ${cookie}`,
      },
      maxBodyLength: Infinity,
    });
  },
  updateUser(id, data) {
    return axios({
      method: "put",
      baseURL: url + `/${id}`,
      headers: {
        token: `Bearer ${cookie}`,
        "Content-Type": "application/json",
      },
      data: data,
      maxBodyLength: Infinity,
    });
  },
  getUsersStats() {
    return axios({
      method: "get",
      baseURL: url + `/stats`,
      headers: {
        token: `Bearer ${cookie}`,
      },
      data: data,
      maxBodyLength: Infinity,
    });
  },
  deleteUser(id) {
    return axios({
      method: "delete",
      baseURL: url + `/${id}`,
      headers: {
        token: `Bearer ${cookie}`,
      },
      maxBodyLength: Infinity,
    });
  },
  getUser(id) {
    return axios({
      method: "get",
      baseURL: url + `/find/${id}`,
      headers: {
        token: `Bearer ${cookie}`,
      },
      maxBodyLength: Infinity,
    });
  },
};

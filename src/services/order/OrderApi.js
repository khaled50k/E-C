import API from "./API";
import axios from "axios";
const { url, cookie } = API;
export default {
  getOrders() {
    return axios({
      method: "get",
      baseURL: url + `/`,
      headers: {
        token: `Bearer ${cookie}`,
      },
      maxBodyLength: Infinity,
    });
  },
  addOrder(data) {
    return axios({
      method: "post",
      baseURL: url + `/`,
      headers: {
        token: `Bearer ${cookie}`,
        "Content-Type": "application/json",
      },
      data: data,
      maxBodyLength: Infinity,
    });
  },
  updateOrder(id, data) {
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
  deleteOrder(id) {
    return axios({
      method: "delete",
      baseURL: url + `/${id}`,
      headers: {
        token: `Bearer ${cookie}`,
      },
      maxBodyLength: Infinity,
    });
  },
  getOrder(id) {
    return axios({
      method: "get",
      baseURL: url + `/find/${id}`,
      headers: {
        token: `Bearer ${cookie}`,
      },
      maxBodyLength: Infinity,
    });
  },
  getOrdersIncome() {
    return axios({
      method: "get",
      baseURL: url + `/income`,
      headers: {
        token: `Bearer ${cookie}`,
      },
      maxBodyLength: Infinity,
    });
  },
};

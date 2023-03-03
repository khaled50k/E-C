import API from "./API";
import axios from "axios";
const { url, cookie } = API;
export default {
  getProducts(newP = false, category = "") {
    return axios({
      method: "get",
      baseURL: url + `?new=${newP}&category=${category}/`,
      headers: {
        token: `Bearer ${cookie}`,
      },
      maxBodyLength: Infinity,
    });
  },
  addProduct(data) {
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
  updateProduct(id, data) {
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
  deleteProduct(id) {
    return axios({
      method: "delete",
      baseURL: url + `/${id}`,
      headers: {
        token: `Bearer ${cookie}`,
      },
      maxBodyLength: Infinity,
    });
  },
  getProduct(id) {
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

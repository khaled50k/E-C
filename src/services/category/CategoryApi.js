import API from "./API";
import axios from "axios";
const { url, cookie } = API;
export default {
  getCategories() {
    return axios({
      method: "get",
      baseURL: url + `/`,
      headers: {
        token: `Bearer ${cookie}`,
      },
      maxBodyLength: Infinity,
    });
  },
  addCategory(data) {
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
  updateCategory(id, data) {
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
  deleteCategory(id) {
    return axios({
      method: "delete",
      baseURL: url + `/${id}`,
      headers: {
        token: `Bearer ${cookie}`,
      },
      maxBodyLength: Infinity,
    });
  },
  getCategory(id) {
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

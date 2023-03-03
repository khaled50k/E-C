import axios from "axios";
import VueCookies from "vue-cookies";
const url = "http://localhost:3030/api/cart";
const cookie = VueCookies.get("jwt");
export default {
  url,
  cookie,
};

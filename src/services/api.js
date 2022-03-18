import axios from "axios";

const api = axios.create({
  baseURL: "https://apifake-capstone-m3.herokuapp.com",
});

export default api;

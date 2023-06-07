import axios from "axios";

const api = axios.create({
  baseURL: "https://opnion-fakeapi.onrender.com",
});

export default api;

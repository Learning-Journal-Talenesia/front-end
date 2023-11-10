import axios from "axios";

const config = {
  baseURL: "https://adorable-tan-wear.cyclic.app",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
};

const AxiosInstance = axios.create(config);

export default AxiosInstance;

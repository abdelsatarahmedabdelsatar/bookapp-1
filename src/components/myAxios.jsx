import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://gutendex.com/books/"
});

export default axiosInstance;

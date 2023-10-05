import axios from "axios";

const HOST_API_KEY = 'https://localhost:8080/';

const axiosInstance = axios.create({
  baseURL: `${HOST_API_KEY}api/v1/`,
  timeout: 600000,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export { axiosInstance };

import axios from "axios";

const request = axios.create({
  timeout: 30
});

request.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return new Promise.reject(error);
  }
);

request.interceptors.response.use(
  response => {
    if (response.data.error === 0) {
      return response.data.data;
    } else {
      return new Promise.reject("服务器异常");
    }
  },
  error => {
    return new Promise.reject(error);
  }
);

export default request;

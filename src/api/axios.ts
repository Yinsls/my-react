import { message } from "antd";
import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    // if (store.state.token) {
    //   config.headers.Authorization = store.state.token
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let msg = "";
    if (error.response) {
      const res = error.response.data;
      const status = res.status;
      if (status === 400) {
        msg = "客户端错误";
      } else if (status === 401) {
        msg = "请求中断，请重试";
      } else if (status === 403) {
        msg = "您权限不足";
      } else if (status === 404) {
        msg = "网络请求不存在";
      } else if (status === 500) {
        msg = "服务器异常";
      } else if (status === 501) {
        msg = "您的操作被取消";
      } else {
        msg = "服务器出逃中...";
      }
    } else if (error.message.includes("timeout")) {
      msg = "请求超时,请检查网络状态";
    }
    if (msg) {
      message.error({
        content: msg,
        duration: 2,
      });
    }
    return Promise.reject(error);
  }
);

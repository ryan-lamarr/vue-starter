/**
 * axios实例创建及拦截器配置
 */
import axios from "axios";
import store from "@/store";

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // 接口baseUrl
  timeout: 12000, // 超时时间
});

// 请求拦截器（reques interceptor）
service.interceptors.request.use(
  (config: any) => {
    // Todo 可在此处配置为每个请求配置token
    config.headers['token'] =  store.state.token;
    //这个config一定要return出去
    return config;
  },
  (error) => {
    // Todo 跳转到请求错误页面
    Promise.reject(error);
  }
);

// 响应拦截器（response interceptor）
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.status !== "200") {
      // Todo 根据错误状态进行处理
      return Promise.reject("error");
    } else {
      return response.data;
    }
  },
  (error) => {
    // Todo 错误处理，如弹窗提示
    return Promise.reject(error);
  }
);
export default service;

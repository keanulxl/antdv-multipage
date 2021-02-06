import axios from 'axios';
import qs from 'qs';
import { message } from 'ant-design-vue';

// axios实例
const service = axios.create({
  baseURL: '',
  timeout: 2500,
});

// 添加请求拦截器
service.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      // stringify把json转换成字符转形式传给后台
      config.data = qs.stringify({
        ...config.data,
      });
    } else if (config.method === 'get') {
      config.params = {
        ...config.params,
      };
    }
    return config;
  },
  error => {
    //  请求错误处理
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  response => {
    console.log(response.data);
    // 1 成功直接返回数据
    switch (response.status) {
      case 200:
        // 请求成功
        return Promise.resolve(response.data);
      default:
        // 请求失败
        message.error('请求失败');
        return Promise.reject(response.data);
    }
  },
  error => {
    // 请求错误处理
    return Promise.reject(error);
  }
);

export default service;

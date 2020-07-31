import axios from "axios";
//设置基本url
axios.defaults.baseURL = process.env.VUE_APP_URL
//请求拦截器
axios.interceptors.request.use(function (config) {
  // KwiVWLCxXax3rRcVsmgX7shQGhtBtXnS
  let data = config.data || {};// get 请求时候是没有 data 防御性代码
  data["oauth_token"] = "KwiVWLCxXax3rRcVsmgX7shQGhtBtXnS";// 在登录的情况下是存在 如果没有登录是不存在的
  config.data = data;
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// 响应的拦截器
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

  export default axios;


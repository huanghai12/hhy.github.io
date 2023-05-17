import axios from 'axios';

const instance = axios.create({
    timeout: 10000,
     // 自定义请求头
    headers: {'X-Requested-With': 'XMLHttpRequest'},
  });
  instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
  // 环境切换process.env.NODE_ENV
  instance.defaults.baseURL = "http://192.168.16.115:3000";
  
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // console.log(77777,instance.defaults.headers)

    // instance.defaults.headers.setCookie = response.headers['set-cookie']
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    instance.defaults.headers.setCookie = response.headers['set-cookie'];
    return response;
  }, function (error) {
    // 对响应错误做点什么
    error = handleNetworkError(error);
    return Promise.reject(error);
  });
  // 错误处理
const handleNetworkError = (error) => {
  let errMessage = "未知错误";
  if(error){
    switch (error) {
      case 400:
        errMessage = "错误的请求"
        break;
      case 403: 
        errMessage = "拒绝访问"
        break;
      case 404: 
        errMessage = "请求错误，未找到该请求"
        break;
      case 405:
        errMessage = "请求方法未允许"
        break;
      case 408:
        errMessage = "请求超时"
        break;
      case 500:
        errMessage = "服务端出错"
        break;
      case 503:
        errMessage = "服务不可用"
        break;
      case 502: 
        errMessage = "网络错误"
        break;
      case 504:
        errMessage = "网络超时"
        break;
      default:
        errMessage = `其他错误-${error}`
        break;
    }
  }else{
    errMessage = "无法连接到服务器"
  }
  return errMessage;
}

export default instance;


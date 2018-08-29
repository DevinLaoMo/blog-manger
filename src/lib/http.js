/**
 * ajax请求配置
 */
import axios from 'axios'

// 整理数据
// axios.defaults.transformRequest = function (data) {
//     //data = Qs.stringify(data);
//     data = JSON.stringify(data);
//       return data;
// };
let baseURL = ''
axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  },
  timeout: 20000,
  withCredentials: true,
  transformRequest: [
    function (data) {
    // 向服务器发送前，修改请求数据
    // 数据序列化//Vic 特殊处理
      return data
    // return qs.stringify(data);
    }
  ]
})

// 配置地址
// http://dazhi.vipgz1.idcfengye.com
// http://wxwl.vipgz1.idcfengye.com
if (process.env.NODE_ENV === 'development') {
  baseURL = 'api'
} else if (process.env.NODE_ENV === 'production') {
  baseURL = 'http://lixiaohua.net:9998'
}
axios.defaults.baseURL = baseURL

// 路由请求拦截
// http request 拦截器
axios.interceptors.request.use(
  config => {
    // config.data = JSON.stringify(config.data);
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    // 判断是否存在ticket，如果存在的话，则每个http header都加上ticket
    // if (cookie.get('token')) {
    // 用户每次操作，都将cookie设置成2小时
    // cookie.set('token',cookie.get('token') ,1/12)
    // cookie.set('name',cookie.get('name') ,1/12)
    // config.headers.token = cookie.get('token')
    // config.headers.name= cookie.get('name')
    //       }

    return config
  },
  error => {
    return Promise.reject(error.response)
  }
)

// 路由响应拦截
// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.resultCode === '404') {
      console.log('response.data.resultCode是404')
      // 返回 错误代码-1 清除ticket信息并跳转到登录页面
      //      cookie.del('ticket')
      //      window.location.href='http://login.com'
    } else {
      return response
    }
  },
  error => {
    return Promise.reject(error.response) // 返回接口返回的错误信息
  }
)

export default axios

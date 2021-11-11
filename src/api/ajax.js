/* 
对axio进行2次封装一个能发ajax请求的函数
1. 统一处理请求异常
2. 异步请求成功的数据不是response, 而是response.data
3. 对请求体参数进行urlencode处理, 而不使用默认的json方式(后台接口不支持)
4. 配置请求超时的时间
5. 通过请求头携带token数据
6. 请求loading
*/

import axios from 'axios'
import qs from 'qs'
const instance = axios.create({
baseURL:'/api',
timeout: 80000  //配置请求超时的时间
})

instance.interceptors.request.use((config)=>{ //请求拦截器
  const data = config.data   
    if(data instanceof Object){
      config.data = qs.stringify(data)  //对请求体参数进行urlencode处理, 而不使用默认的json方式
    }
  return config
})

instance.interceptors.response.use(  //响应拦截器
  response =>{ 
    return response.data //异步请求成功的数据不是response, 而是response.data
  },
  error => {
    alert('请求出错了'+error.message)
    return new Promise(() => {})  // 统一处理请求异常
  }
)

export default instance
// 对axios进行二次封装
import axios from 'axios'
// import nprogress from 'nprogress';//进度条开始和结束start和done
//引入进度条样式:进度条才会出bi并且可以修改颜色等等
// import 'nprogress/nprogress.css'

const requests = axios.create({
    baseURL: '/api',
    timeout: 5000
})

// //请求拦截器
// requests.interceptors.request.use(
//     (config) => {//config：包含请求头header很重要
//         nprogress.start()
//         return config
//     }
// )

// //响应拦截器
// requests.interceptors.response.use(
//     (response) => {
//         nprogress.done()
//         return response.data
//     },
//     (error) => {
//         return Promise.reject(error)  //终结promise链
//     }
// )
export default requests
//这个模块：对所有API统一管理
import requests from "./request"

//三级联动的接口  /api/product/getBaseCategoryList  get
//axios发送请求返回promise对象

//测试请求 /helloworld
export const reqHelloworld = () => {
    return requests({
        url: '/helloworld',
        method: 'GET'
    })
}

//用户个人信息查询
export const reqQueryUserInfo = (params) => {
    return requests({
        url: `/info?id=${params.id}`,
        method: 'GET',
    })
}
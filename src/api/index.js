//这个模块：对所有API统一管理
import requests from "./request";

//三级联动的接口  /api/product/getBaseCategoryList  get
//axios发送请求返回promise对象
export const reqCategoryList = () => {
    return requests({
        url: '/product/getBaseCategoryList',
        method: 'GET'
    })
}

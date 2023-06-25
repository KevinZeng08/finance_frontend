//这个模块：对所有API统一管理
import requests from "./request"

//三级联动的接口  /api/product/getBaseCategoryList  get
//axios发送请求返回promise对象

//测试请求 /helloworld
export const reqHelloworld = () => {
  return requests({
    url: "/helloworld",
    method: "GET",
  })
}

// Manager Backend
//用户信息列表查询
export const reqQueryAllCustomer = (params) => {
  return requests({
    url: `/admin/customer/query/`,
    method: "GET",
    params: params,
  })
}

// 所有基金列表查询
export const reqQueryAllFund = () => {
  return requests({
    url: "/admin/fund/query/",
    method: "GET",
  })
}

// 所有理财产品列表查询
export const reqQueryProductInfo = () => {
  return requests({
    url: "/admin/product/query/",
    method: "GET",
  })
}

// 所有保险列表查询
export const reqQueryAllInsurance = () => {
  return requests({
    url: "/admin/insurance/query/",
    method: "GET",
  })
}

//基金详情查询
export const reqQueryFundDetail = (params) => {
  return requests({
    url: `/admin/fund/detail/`,
    method: "GET",
    params: { id: params },
  })
}

//基金增加
export const reqAddFund = (query) => {
  // return requests.post('/admin/fund/add/', )

  // return requests.post('/admin/fund/add/', query) JSON

  // let myForm = new FormData()
  // myForm.append('f_name', query.f_name)
  // myForm.append('f_id', query.f_id)
  // return requests.post('/admin/fund/add/', myForm)

  return requests({
    url: "/admin/fund/add/",
    method: "POST",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: query,
  })
}

//基金删除
export const reqChangeFund = (params) => {
  return requests({
    url: `/admin/fund/change/`,
    method: "POST",
    data: {
      id: params.f_id,
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  })
}

//保险删除
export const reqDeleteInsurance = (i_id) => {
  return requests({
    url: `/admin/insurance/delete/`,
    method: "POST",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: {
      id: i_id
    }
  })
}

// User Center

//用户个人信息查询
export const reqQueryUserInfo = (params) => {
  return requests({
    url: `/info/`,
    method: "GET",
    params: { id: params.id },
  })
}

//用户修改密码
export const reqChangePassword = (params) => {
  return requests({
    url: `/password/`,
    method: "POST",
    query: params,
  })
}

//用户银行卡充值
export const reqRecharge = (params) => {
  return requests({
    url: `/card/recharge/`,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;",
    },
    data: params,
  })
}

//指定用户资产列表查询
export const reqQueryUserAsset = (params) => {
  return requests({
    url: `/property/query/`,
    method: "GET",
    params: params,
  })
}

//已上线基金列表查询
export const reqQueryActiveFund = () => {
  return requests({
    url: `/fund/query/`,
    method: "GET",
  })
}

//已上线理财产品查询
export const reqQueryActiveProduct = () => {
  return requests({
    url: `/product/query/`,
    method: "GET",
  })
}

//已上线保险查询
export const reqQueryActiveInsurance = () => {
  return requests({
    url: `/insurance/query/`,
    method: "GET",
  })
}

//用户购买基金
export const reqBuyFund = (params) => {
  return requests({
    url: `/buy/fund/`,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;",
    },
    data: params,
  })
}

//用户购买理财产品
export const reqBuyProduct = (params) => {
  return requests({
    url: `/buy/product/`,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;",
    },
    data: params,
  })
}

//用户购买保险
export const reqBuyInsurance = (params) => {
  return requests({
    url: `/buy/insurance/`,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;",
    },
    data: params,
  })
}

//用户登录
export const reqUserLogin = (params) => {
  return requests({
    url: `/login/`,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;",
    },
    data: params,
  })
}

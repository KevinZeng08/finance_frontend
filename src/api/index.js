//这个模块：对所有API统一管理
import requests from "./request";

//三级联动的接口  /api/product/getBaseCategoryList  get
//axios发送请求返回promise对象

//测试请求 /helloworld
export const reqHelloworld = () => {
  return requests({
    url: "/helloworld",
    method: "GET",
  });
};

// Manager Backend
//用户信息列表查询
export const reqQueryAllCustomer = (params) => {
  return requests({
    url: `/admin/customer/query/`,
    method: "GET",
    params: params,
  });
};

// 所有基金列表查询
export const reqQueryAllFund = () => {
  return requests({
    url: "/admin/fund/query/",
    method: "GET",
  });
};

// 所有理财产品列表查询
export const reqQueryAllProduct = () => {
  return requests({
    url: "/admin/product/query/",
    method: "GET",
  });
};

// 所有保险列表查询
export const reqQueryAllInsurance = () => {
  return requests({
    url: "/admin/insurance/query/",
    method: "GET",
  });
};

//基金详情查询
export const reqQueryFundDetail = (params) => {
  return requests({
    url: `/admin/fund/detail/`,
    method: "GET",
    params: {id: params.id},
  });
};

//基金增加
export const reqAddFund = (params) => {
  return requests({
    url: "/admin/fund/add/",
    method: "POST",
    data: params,
  });
};

//基金删除
export const reqDeleteFund = (params) => {
  return requests({
    url: `/admin/fund/delete/`,
    method: "POST",
    data: params,
  });
};

//保险删除
export const reqDeleteInsurance = (params) => {
  return requests({
    url: `/admin/insurance/delete/`,
    method: "POST",
    data: params,
  });
};

// User Center

//用户个人信息查询
export const reqQueryUserInfo = (params) => {
  return requests({
    url: `/info/`,
    method: "GET",
    params: {id: params.id},
  });
};

//用户银行卡充值
export const reqRecharge = (params) => {
  return requests({
    url: `/recharge/`,
    method: "POST",
    query: params,
  });
};

//指定用户资产列表查询
export const reqQueryUserAsset = (params) => {
  return requests({
    url: `/property/query/`,
    method: "GET",
    data: params
  });
};

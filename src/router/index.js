import Vue from "vue"
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import AdminMain from "@/views/admin/Main.vue"
import User from "@/views/admin/user.vue"
import Fund from '@/views/admin/fund.vue'
import FinanceProduct from '@/views/admin/financeProduct.vue'

import UserMain from "@/views/user/Main.vue"
import UserFund from '@/views/user/fund.vue'
import UserFinanceProduct from '@/views/user/financeProduct.vue'
import UserInfo from "@/views/user/info.vue"
import UserProperty from "@/views/user/property.vue"
import UserInsurance from "@/views/user/insurance.vue"
import Login from '@/views/login.vue'
export default new VueRouter({
  routes: [
    {
      path: '/admin',
      name: 'admin',
      meta: { flag: 1 },
      component: AdminMain,
      children: [   //子路由 先匹配主路由，再匹配子路由
        {
          name: 'user', meta: { flag: 1 },
          path: 'user',  //用户管理
          component: User,
        },
        {
          name: 'fund', meta: { flag: 1 },
          path: 'fund',  //基金管理
          component: Fund
        },
        {
          name: 'financeproduct', meta: { flag: 1 },
          path: 'financeproduct',   //理财产品管理
          component: FinanceProduct
        }
      ]
    },
    //用户--主页
    {
      path: '/user',
      name: 'userHome',
      meta: { flag: 0 },
      component: UserMain,
      children: [   //子路由 先匹配主路由，再匹配子路由
        {
          name: 'userInfo', meta: { flag: 0 },
          path: 'info', //银行卡管理
          component: UserInfo
        },
        {
          name: 'userFund', meta: { flag: 0 },
          path: 'fund',  //基金管理
          component: UserFund
        },
        {
          name: 'userFinanceproduct', meta: { flag: 0 },
          path: 'financeproduct',   //理财产品管理
          component: UserFinanceProduct
        },
        {
          name: 'userProperty',
          path: 'property',   //我的资产
          component: UserProperty
        },
        {
          name: 'userInsurance',
          path: 'insurance',   //我的保险
          component: UserInsurance
        }
      ]
    },
    //登录
    {
      path: '/login',
      component: Login,
    },
    { //重定向，在项目跑起来的时候，访问'/',立马让它定向到首页
      path: '*',
      redirect: '/login'
    }
  ]
})
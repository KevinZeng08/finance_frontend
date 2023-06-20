import Vue from "vue"
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import AdminMain from "@/views/admin/Main.vue"
import User from "@/views/admin/user.vue"
import Fund from '@/views/admin/fund.vue'
import FinanceProduct from '@/views/admin/financeProduct.vue'
import AdminUserDetail from '@/views/admin/detail/user.vue'

import UserMain from "@/views/user/Main.vue"
import UserFund from '@/views/user/fund.vue'
import UserFinanceProduct from '@/views/user/financeProduct.vue'
import UserCard from "@/views/user/card.vue"
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
          name: 'userCard', meta: { flag: 0 },
          path: 'card', //银行卡管理
          component: UserCard
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
import Vue from "vue"
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import AdminMain from "@/views/admin/Main.vue"
import User from "@/views/admin/user.vue"
import Insurance from '@/views/admin/insurance.vue'
import Fund from '@/views/admin/fund.vue'
import FinanceProduct from '@/views/admin/financeProduct.vue'

import UserMain from "@/views/user/Main.vue"
import UserInsurance from '@/views/user/insurance.vue'
import UserFund from '@/views/admin/user.vue'
import UserFinanceProduct from '@/views/user/financeProduct.vue'

export default new VueRouter({
  routes: [
    {
      path: '/admin',
      component: AdminMain,
      children: [   //子路由 先匹配主路由，再匹配子路由
        {
          name: 'user',
          path: 'user',  //用户管理
          component: User,
        },
        {
          name: 'insurance',
          path: 'insurance', //保险管理
          component: Insurance
        },
        {
          name: 'fund',
          path: 'fund',  //基金管理
          component: Fund
        },
        {
          name: 'financeproduct',
          path: 'financeproduct',   //理财产品管理
          component: FinanceProduct
        }
      ]
    },
    {
      path: '/',
      component: UserMain,
      children: [   //子路由 先匹配主路由，再匹配子路由
        {
          name: 'userInsurance',
          path: 'insurance', //保险管理
          component: UserInsurance
        },
        {
          name: 'userFund',
          path: 'fund',  //基金管理
          component: UserFund
        },
        {
          name: 'userFinanceproduct',
          path: 'financeproduct',   //理财产品管理
          component: UserFinanceProduct
        }
      ]
    }
  ]
})
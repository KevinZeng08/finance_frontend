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
import UserInfo from "@/views/user/info.vue"
import UserProperty from "@/views/user/property.vue"
import UserInsurance from "@/views/user/insurance.vue"

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
          children: [
            {
              name: 'userDetail',
              path: 'detail',  //用户详情
              component: AdminUserDetail
            }
          ]
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
    //用户--主页
    {
      path: '/',
      component: UserMain,
      children: [   //子路由 先匹配主路由，再匹配子路由
        {
          name: 'userInfo',
          path: 'info', //银行卡管理
          component: UserInfo
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
    }
  ]
})
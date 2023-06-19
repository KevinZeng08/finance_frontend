import Vue from "vue"
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Main from "@/views/Main.vue"
import User from "@/views/user.vue"
import Insurance from '@/views/insurance.vue'
import Fund from '@/views/fund.vue'
import FinanceProduct from '@/views/financeProduct.vue'

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Main,
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
    }
  ]
})
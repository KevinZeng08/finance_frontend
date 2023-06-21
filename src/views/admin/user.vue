<!-- 用户管理组件 -->
<template>
  <div>
    <div class="manage-header">
      <!-- form搜索区域 -->
      <el-form :inline="true" :model="userForm">
        <el-form-item>
          <el-input placeholder="请输入名称" v-model="userForm.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id_card" label="身份证号" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="bank_card" label="银行卡号" width="180">
        </el-table-column>
        <el-table-column prop="phone" label="手机号"> </el-table-column>
        <el-table-column prop="type" label="类型"> </el-table-column>
        <el-table-column prop="type" label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </template>
    <div class="pagination-container w-100 text-center margin-top-20">
      <el-pagination small layout="prev, pager, next" :total="50">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {reqQueryAllCustomer} from '@/api/index'
export default {
  data () {
    return {
      tableData: [
        {
          id: 1,
          id_card: "9841998189",
          bank_card: "1969198189",
          name: "王小虎",
          phone: "1915195230",
          type: "高端用户",
        },
      ],
      userForm: {
        name: "",
      },
    }
  },
  methods: {
    handleDetail (row) {
      console.log(row)
    },
    clickDetail () {
      this.$router.push(
        {
          name: "userDetail",
        },
        () => { },
        () => { }
      )
    },

    search(){
      console.log(this.userForm)
    },

    handleDelete (index, row) {
      console.log(index, row)
    },

    getUserList() {
      // reqQueryAllCustomer().then(res => {
      //   console.log(res)
      // }) 
    }
  },

  mounted(){
    this.getUserList()
  }
};
</script>

<style>
.manage-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
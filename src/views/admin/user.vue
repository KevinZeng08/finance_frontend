<!-- 用户管理组件 -->
<template>
  <div>
    <div class="manage-header">
      <!-- form搜索区域 -->
      <el-form :inline="true" :model="userForm">
        <el-form-item>
          <el-input
            placeholder="请输入持卡人名称"
            v-model="userForm.name"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <template>
      <el-table :data="filTableData" style="width: 100%">
        <el-table-column prop="c_id_card" label="身份证号" width="210">
        </el-table-column>
        <el-table-column prop="c_name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="c_id_card" label="银行卡号" width="210">
        </el-table-column>
        <el-table-column prop="c_phone" label="手机号"> </el-table-column>
        <el-table-column prop="c_type" label="类型"> </el-table-column>
        <el-table-column label="操作">
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
    <!-- 分页 -->
    <div class="pagination-container w-100 text-center margin-top-20">
      <el-pagination small layout="prev, pager, next" :total="50">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { reqQueryAllCustomer } from '@/api/index'
export default {
  data () {
    return {
      tableData: [],
      userForm: {
        name: "",
      },
    }
  },
  computed: {
    //查询过滤出的数组
    filTableData () {
      const arr = this.tableData.filter((p) => {
        return p.c_name.indexOf(this.userForm.name) != -1
      })
      return arr
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

    search () {
      console.log(this.userForm)
    },

    handleDelete (index, row) {
      console.log(index, row)
    },

    getUserList () {
      reqQueryAllCustomer().then(res => {
        this.tableData = res.data.data
        // console.log(res.data.data)
      })
    }
  },

  mounted () {
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
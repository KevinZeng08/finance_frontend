<template>
  <div>
    <div class="manage-header">
      <!-- form搜索区域 -->
      <el-form :inline="true" :model="Form">
        <el-form-item>
          <el-input placeholder="请输入名称" v-model="Form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <template>
      <el-table :data="filTableData" style="width: 100%">
        <el-table-column prop="p_name" label="产品名称"> </el-table-column>
        <el-table-column prop="p_id" label="产品编号"> </el-table-column>
        <el-table-column prop="p_description" label="产品描述">
        </el-table-column>
        <el-table-column prop="p_amount" label="购买金额"> </el-table-column>
        <el-table-column prop="p_year" label="理财年限"> </el-table-column>
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
    <div class="pagination-container w-100 text-center margin-top-20">
      <el-pagination small layout="prev, pager, next" :total="50">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { reqQueryProductInfo } from '@/api'
export default {
  data () {
    return {
      tableData: [],
      Form: {
        name: "",
      },
    }
  },
  computed: {
    //查询过滤出的数组
    filTableData () {
      const arr = this.tableData.filter((p) => {
        return p.p_name.indexOf(this.Form.name) != -1
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

    handleDelete (index) {
      console.log(index)
    },
    queryProductInfo () {
      reqQueryProductInfo()
        .then((res) => {
          if (res.data.code === "200") {
            this.tableData = res.data.data
          } else if (res.data.code === "404") {
            console.log(res.data.msg)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }

  },
  mounted () {
    this.queryProductInfo()
  },
}
</script>

<style>
.manage-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pagination-container {
  text-align: right;
}
</style>
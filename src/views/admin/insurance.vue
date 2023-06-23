<template>
  <div>
    <div class="manage-header">
      <!-- form搜索区域 -->
      <el-form :inline="true" :model="insuranceSearchForm">
        <el-form-item>
          <el-input
            placeholder="请输入基金名称"
            v-model="insuranceSearchForm.name"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchInsurance">查询</el-button>
        </el-form-item>
      </el-form>
    </div>

    <template>
      <el-table :data="filTableData" style="width: 100%">
        <el-table-column prop="i_name" label="保险名称" width="180">
        </el-table-column>
        <el-table-column prop="i_year" label="保险年限"> </el-table-column>
        <el-table-column prop="i_amount" label="保险金额"> </el-table-column>
        <el-table-column prop="i_person" label="适用人群"> </el-table-column>
        <el-table-column prop="i_project" label="保险项目"> </el-table-column>
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
  </div>
</template>
  
  <script>
import { reqQueryAllInsurance, reqDeleteInsurance } from '@/api'
export default {
  data () {
    return {
      //search
      insuranceSearchForm: {
        name: "",
      },
      //table
      tableData: [],
    }
  },
  computed: {
    //查询过滤出的数组
    filTableData () {
      const arr = this.tableData.filter((p) => {
        return p.i_name.indexOf(this.insuranceSearchForm.name) != -1
      })
      return arr
    }
  },
  methods: {
    //search
    searchInsurance () {
      //条件查询基金
      console.log(this.insuranceSearchForm.name)
    },
    getInsuranceList () {
      //查询所有理财产品
      reqQueryAllInsurance().then((res) => {
        if (res.data.code === "200") {
          this.tableData = res.data.data
        } else if (res.data.code === "404") {
          console.log(res.data.msg)
        }
      })
        .catch((err) => {
          console.log(err)
        })
    },
    handleDelete (i) {
      //删除某个理财产品
      // reqDeleteInsurance(i.i_id).then((res) => {
      //   if (res.data.code === '200') {
      //     console.log('1')
      //   } else if (res.data.code === "404") {
      //     console.log(res.data.msg)
      //   }
      // }).catch((err) => {
      //   console.log(err)
      // })
      console.log(i)
    }

  },
  mounted () {
    this.getInsuranceList()
  },
};
  </script>
  
  <style>
</style>
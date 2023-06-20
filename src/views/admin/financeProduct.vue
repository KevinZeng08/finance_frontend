<template>
  <div>
    <div class="manage-header">
      <!-- form搜索区域 -->
      <el-form :inline="true" :model="userForm">
        <el-form-item>
          <el-input placeholder="请输入名称" v-model="userForm.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="p_name" label="产品名称" width="180">
        </el-table-column>
        <el-table-column prop="p_id" label="产品编号" width="180">
        </el-table-column>
        <el-table-column prop="p_description" label="产品描述" width="180">
        </el-table-column>
        <el-table-column prop="p_amount" label="购买金额" width="180">
        </el-table-column>
        <el-table-column prop="p_year" label="理财年限" width="180">
        </el-table-column>
        <el-table-column label="操作" width="180">
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
export default {
  data () {
    return {
      tableData: [
        {
          p_name: '债券',
          p_id: 'p1344',
          p_description: '以国债、金融债。。。。',
          p_amount: '50000',
          p_year: '6'
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

    handleDelete (index, row) {
      console.log(index, row)
    },
  },
};
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
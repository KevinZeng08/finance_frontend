<template>
  <div>
    <div class="manage-header">
      <!-- form搜索区域 -->
      <el-form :inline="true" :model="fundSearchForm">
        <el-form-item>
          <el-input
            placeholder="请输入基金名称"
            v-model="fundSearchForm.name"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchFund">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-dialog
      title="基金买入"
      :visible.sync="buyFormVisible"
      width="30%"
      :before-close="handleBuyClose"
    >
      <!-- 买入表单信息 -->
      <el-form
        ref="form"
        :rules="rules"
        :inline="true"
        :model="buyForm"
        label-width="80px"
      >
        <el-form-item label="买入金额" prop="amount">
          <el-input
            placeholder="请输入买入金额"
            v-model="buyForm.amount"
          ></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="handleBuyClose">取 消</el-button>
        <el-button type="primary" @click="buy">确 定</el-button>
      </span>
    </el-dialog>

    <template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="f_name" label="基金名称" width="180">
        </el-table-column>
        <el-table-column prop="f_type" label="基金类型" width="180">
        </el-table-column>
        <el-table-column prop="f_amount" label="基金金额"> </el-table-column>
        <el-table-column prop="risk_level" label="风险等级"> </el-table-column>
        <el-table-column prop="type" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="success" @click="handleBuy(scope.row)"
              >买入</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
import { reqBuyFund, reqQueryActiveFund } from "@/api/index";
export default {
  data() {
    return {
      //search
      fundSearchForm: {
        name: "",
      },
      //table
      tableData: [],
      //buy
      buyFormVisible: false,
      buyForm: {
        amount: 100,
      },
      //row data
      fund: {},
      // other
      rules: {
        amount: [
          { required: true, message: "请输入买入金额", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    //search
    searchFund() {
      //条件查询基金
      console.log(this.fundSearchForm.name);
    },
    getActiveFunds() {
      //查询所有已上线的基金
      reqQueryActiveFund()
        .then((res) => {
          this.tableData = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //buy
    handleBuy(fund) {
      this.buyFormVisible = true;
      this.fund = fund;
    },
    handleBuyClose() {
      this.$refs["form"].resetFields();
      this.buyFormVisible = false;
    },
    buy() {
      //向后端发送请求
      console.log("buy " + this.buyForm.amount);
      console.log(this.fund);
      const params = {
        u_id: sessionStorage.getItem("id"),
        f_id: this.fund.f_id,
        amount: this.buyForm.amount,
      };
      reqBuyFund(params)
        .then((res) => {
          console.log(res.data);
          if (res.data.code === "200") {
            this.$message({
              message: "买入成功",
              type: "success",
            });
            this.handleBuyClose();
          } else if (res.data.code === "404") {
            this.$message({
              message: res.data.data,
              type: "error",
            });
            this.handleBuyClose();
          }
          this.getActiveFunds();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getActiveFunds();
  },
};
</script>

<style>
</style>
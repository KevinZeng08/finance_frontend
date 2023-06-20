<template>
    <div>
      <div class="manage-header">
        <!-- form搜索区域 -->
        <el-form :inline="true" :model="insuranceSearchForm">
          <el-form-item>
            <el-input placeholder="请输入基金名称" v-model="insuranceSearchForm.name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="searchInsurance">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-dialog
        title="理财产品买入"
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
          <el-table-column prop="name" label="保险名称" width="180">
          </el-table-column>
          <el-table-column prop="year" label="保险年限">
          </el-table-column>
          <el-table-column prop="amount" label="保险金额">
          </el-table-column>
          <el-table-column prop="person" label="适用人群"> </el-table-column>
          <el-table-column prop="project" label="保险项目"> </el-table-column>
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
  export default {
    data() {
      return {
        //search
        insuranceSearchForm: {
          name: "",
        },
        //table
        tableData: [
          {
            name: "保险1",
            year: "1年",
            amount: "10000",
            person: "适用人群1",
            project: "保险项目1",
            type: "买入",
          },
          {
            name: "保险2",
            year: "2年",
            amount: "20000",
            person: "适用人群2",
            project: "保险项目2",
            type: "买入",
          },
        ],
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
      searchInsurance(){
        //条件查询基金
        console.log(this.insuranceSearchForm.name)
      },
      getActiveInsurances() {
        //查询所有理财产品
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
      },
    },
    mounted() {
      this.getActiveInsurances();
    },
  };
  </script>
  
  <style>
  </style>
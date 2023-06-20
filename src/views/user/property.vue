<template>
  <div>
    <div class="manage-header">
      <!-- form搜索区域 -->
      <el-form :inline="true" :model="propertySearchForm">
        <el-form-item>
          <el-input
            placeholder="请输入资产名称"
            v-model="propertySearchForm.name"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchProperty">查询</el-button>
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

    <el-dialog
      title="资产卖出"
      :visible.sync="sellFormVisible"
      width="30%"
      :before-close="handleSellClose"
    >
      <!-- 买入表单信息 -->
      <el-form
        ref="form"
        :rules="rules"
        :inline="true"
        :model="sellForm"
        label-width="80px"
      >
        <el-form-item label="卖出金额" prop="amount">
          <el-input
            placeholder="请输入卖出金额"
            v-model="sellForm.amount"
          ></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="handleSellClose">取 消</el-button>
        <el-button type="primary" @click="sell">确 定</el-button>
      </span>
    </el-dialog>

    <template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="资产名称" width="180">
        </el-table-column>
        <el-table-column prop="type" label="资产类型" width="180">
        </el-table-column>
        <el-table-column prop="amount" label="资产金额"> </el-table-column>
        <el-table-column prop="income" label="资产收益"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="success" @click="handleBuy(scope.row)"
              >买入</el-button
            >
            <el-button size="mini" type="danger" @click="handleSell(scope.row)"
              >卖出</el-button
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
  data() {
    return {
      //table
      tableData: [
        {
          id: 1,
          name: "人工智能基金",
          type: "基金",
          amount: "1000",
          income: "100",
        },
      ],
      //search
      property: {},
      propertySearchForm: {
        name: "",
      },
      //buy
      buyFormVisible: false,
      buyForm: {
        amount: 100,
      },
      //sell
      sellFormVisible: false,
      sellForm: {
        amount: 100,
      },
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
    searchProperty() {
      console.log(this.propertySearchForm.name);
    },
    //buy
    handleBuy(property) {
      this.buyFormVisible = true;
      this.property = property;
    },
    handleBuyClose() {
      this.$refs["form"].resetFields();
      this.buyFormVisible = false;
    },
    buy() {
      //向后端发送请求
      console.log("buy " + this.buyForm.amount);
      console.log(this.property);

      //刷新资产列表
      this.getPropertyList();
    },
    //sell
    handleSell(property) {
      this.sellFormVisible = true;
      this.property = property;
    },
    handleSellClose() {
      this.$refs["form"].resetFields();
      this.sellFormVisible = false;
    },
    sell() {
      //向后端发送卖出请求
      console.log("sell " + this.sellForm.amount);
      console.log(this.property);

      //刷新资产列表
      this.getPropertyList();
    },

    //向后端请求指定用户资产列表
    getPropertyList() {},
  },

  mounted() {
    this.getPropertyList();
  },
};
</script>

<style>
</style>
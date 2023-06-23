<template>
  <div>
    <div class="manage-header">
      <!-- form搜索区域 -->
      <el-form :inline="true" :model="productSearchForm">
        <el-form-item>
          <el-input
            placeholder="请输入理财产品名称"
            v-model="productSearchForm.name"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchProduct">查询</el-button>
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
        <el-table-column prop="p_name" label="理财产品名称" width="180">
        </el-table-column>
        <el-table-column prop="p_year" label="理财年限"> </el-table-column>
        <el-table-column prop="p_rate" label="年利率"> </el-table-column>
        <el-table-column prop="p_amount" label="购买金额"> </el-table-column>
        <el-table-column prop="p_description" label="产品描述">
        </el-table-column>
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
import { reqQueryActiveProduct } from "@/api/index";
export default {
  data() {
    return {
      //search
      productSearchForm: {
        name: "",
      },
      //table
      tableData: [
        {
          p_id: 12,
          p_name: "3年期存款产品",
          p_year: 3,
          p_amount: 1520,
          p_rate: 2.5,
          p_description: "这是一款3年期的存款理财产品",
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
    searchProduct() {
      //条件查询基金
      console.log(this.productSearchForm.name);
    },
    getActiveProducts() {
      //查询所有理财产品
      reqQueryActiveProduct().then((res) => {
        this.tableData = res.data.data;
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
    },
  },
  mounted() {
    this.getActiveProducts();
  },
};
</script>

<style>
</style>
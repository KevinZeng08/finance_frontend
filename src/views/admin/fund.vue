<template>
  <div>
    <el-dialog
      title="详情"
      :visible.sync="detailVisible"
      width="30%"
      :before-close="handleDetailClose"
      id="detailDialog"
    >
      <el-descriptions
        class="margin-top"
        title="带边框列表"
        :column="3"
        :size="size"
        border
      >
        <template slot="extra">
          <el-button type="primary" size="small">操作</el-button>
        </template>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            用户名
          </template>
          kooriookami
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            手机号
          </template>
          18100000000
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-location-outline"></i>
            居住地
          </template>
          苏州市
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-tickets"></i>
            备注
          </template>
          <el-tag size="small">学校</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-office-building"></i>
            联系地址
          </template>
          江苏省苏州市吴中区吴中大道 1188 号
        </el-descriptions-item>
      </el-descriptions>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="detailVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-dialog
      title="提示"
      :visible.sync="addVisible"
      width="50%"
      :before-close="handleClose"
    >
      <!-- 用户的表单信息 -->
      <el-form
        ref="form"
        :rules="rules"
        :inline="true"
        :model="form"
        label-width="80px"
      >
        <el-form-item label="姓名" prop="name">
          <el-input placeholder="请输入姓名" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input placeholder="请输入年龄" v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="form.sex" placeholder="请选择">
            <el-option label="男" :value="1"></el-option>
            <el-option label="女" :value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期" prop="birth">
          <el-date-picker
            v-model="form.birth"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-DD"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="地址" prop="addr">
          <el-input placeholder="请输入地址" v-model="form.addr"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>

    <el-row>
      <el-button
        type="primary"
        style="margin-bottom: 20px"
        @click="addVisible = true"
        >+新增</el-button
      >
    </el-row>
    <template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="idCard" label="身份证号" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="phone" label="手机号"> </el-table-column>
        <el-table-column prop="type" label="类型"> </el-table-column>
        <el-table-column prop="type" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleDetail(scope.row)"
              >详情</el-button
            >
            <el-button
              size="mini"
              type="success"
              @click="scope.row.state = 1"
              v-show="scope.row.state === 0"
              >上线</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="scope.row.state = 0"
              v-show="scope.row.state === 1"
              >下线</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </template>
    <div class="pagination-container w-100 text-center margin-top-20">
      <el-pagination small layout="prev, pager, next" :total="50">
      </el-pagination>
    </div>
    <div><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addVisible: false,
      detailVisible: false,
      form: {
        name: "",
        age: "",
        sex: "",
        birth: "",
        addr: "",
      },
      tableData: [
        {
          id: 1,
          idCard: "2016-05-02",
          name: "王小虎",
          phone: "上海市普陀区金沙江路 1518 弄",
          type: "高端用户",
          state: 0,
        },
      ],
    };
  },
  methods: {
    submit() {},
    // 弹窗关闭的时候
    handleClose() {
      this.$refs.form.resetFields();
      this.addVisible = false;
    },
    cancel() {
      this.handleClose();
    },

    // 获取列表的数据
    getList() {},
    // 选择页码的回调函数
    handlePage(val) {
      // console.log(val, 'val')
      this.pageData.page = val;
      this.getList();
    },
    // 列表的查询
    onSubmit() {
      this.getList();
    },
    

    // 详情弹窗
    handleDetail(row){
      console.log(row)
      this.detailVisible = true
    },

    //获取基金详情
    getFund(){

    }
  },

  mounted() {
    this.getList();
  },
};
</script>

<style>
#detailDialog {
  width: 100%;
  height: 100%;
}
</style>
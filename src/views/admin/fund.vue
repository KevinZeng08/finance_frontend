<template>
  <div>
    <el-dialog
      title="基金详情"
      :visible.sync="detailVisible"
      width="70%"
      height="70%"
      :before-close="handleDetailClose"
      id="detailDialog"
    >
      <el-descriptions
        class="margin-top"
        title="xx基金详情"
        :column="2"
        :size="size"
        border
      >
        <!-- <template slot="extra">
          <el-button type="primary" size="small">操作</el-button>
        </template> -->
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            基金名称
          </template>
          kooriookami
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            基金编号
          </template>
          18100000000
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-location-outline"></i>
            基金类型
          </template>
          苏州市
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-tickets"></i>
            基金金额
          </template>
          <el-tag size="small">学校</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-office-building"></i>
            风险等级
          </template>
          江苏省苏州市吴中区吴中大道 1188 号
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-office-building"></i>
            基金管理者
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
      <!-- 基金的表单信息 -->
      <el-form
        ref="form"
        :rules="rules"
        :inline="true"
        :model="form"
        label-width="80px"
      >
        <el-form-item label="名称" prop="f_name">
          <el-input placeholder="请输入..." v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="编号" prop="f_id">
          <el-input placeholder="请输入..." v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="f_type">
          <el-input placeholder="请输入..." v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="金额" prop="f_amount">
          <el-input placeholder="请输入..." v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="风险等级" prop="risk_level">
          <el-select v-model="form.sex" placeholder="请选择">
            <el-option label="低" :value="0"></el-option>
            <el-option label="中" :value="1"></el-option>
            <el-option label="高" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="管理者" prop="f_manager">
          <el-input placeholder="请输入..." v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="addr">
          <el-input placeholder="请输入..." v-model="form.addr"></el-input>
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
        >+ 新增</el-button
      >
    </el-row>
    <template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="f_name" label="名称"> </el-table-column>
        <el-table-column prop="f_id" label="编号"> </el-table-column>
        <el-table-column prop="f_type" label="类型"> </el-table-column>
        <el-table-column prop="f_amount" label="金额"> </el-table-column>
        <el-table-column prop="risk_level" label="风险等级"> </el-table-column>
        <el-table-column prop="f_manager" label="管理者"> </el-table-column>

        <el-table-column label="操作">
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
  data () {
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
      size: '',
      rules: {
        name: [{ required: true, message: "请输入姓名" }],
        age: [{ required: true, message: "请输入年龄" }],
        sex: [{ required: true, message: "请选择性别" }],
        birth: [{ required: true, message: "请选择出生日期" }],
        addr: [{ required: true, message: "请输入地址" }],
      },
      tableData: [
        {
          f_name: '1',
          f_id: '1',
          f_type: '1',
          f_amount: '1',
          risk_level: '1',
          f_manager: '1'
        },
      ],
    }
  },
  methods: {
    submit () { },
    // 弹窗关闭的时候
    handleClose () {
      this.$refs.form.resetFields()
      this.addVisible = false
    },
    cancel () {
      this.handleClose()
    },

    // 获取列表的数据
    getList () { },
    // 选择页码的回调函数
    handlePage (val) {
      // console.log(val, 'val')
      this.pageData.page = val
      this.getList()
    },
    // 列表的查询
    onSubmit () {
      this.getList()
    },

    // 详情弹窗
    handleDetail (row) {
      console.log(row)
      this.detailVisible = true
    },
    handleDetailClose () {
      this.detailVisible = false
    },

    //获取基金详情
    getFund () { },
  },

  mounted () {
    this.getList()
  },
};
</script>

<style>
#detailDialog {
  width: 100%;
  height: 100%;
}
</style>
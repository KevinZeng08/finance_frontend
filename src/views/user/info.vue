<!-- 用户管理组件 -->
<template>
  <div>
    <el-dialog
      title="修改密码"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <!-- 买入表单信息 -->
      <el-form
        ref="form"
        :rules="rules"
        :inline="true"
        :model="form"
        label-width="80px"
      >
        <el-form-item label="新密码" prop="password">
          <el-input
            placeholder="请输入新密码"
            v-model="form.password"
          ></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="updatePassword">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 银行卡余额充值 -->
    <el-dialog
      title="修改密码"
      :visible.sync="rechargeVisible"
      width="30%"
      :before-close="handleRechargeClose"
    >
      <el-form
        ref="form"
        :rules="rechargeRules"
        :inline="true"
        :model="rechargeForm"
        label-width="80px"
      >
        <el-form-item label="充值金额" prop="amount">
          <el-input
            placeholder="请输入充值金额"
            v-model="rechargeForm.amount"
            type="number"
            :min = "1"
          ></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="handleRechargeClose">取 消</el-button>
        <el-button type="primary" @click="recharge">确 定</el-button>
      </span>
    </el-dialog>

    <el-descriptions title="个人信息" direction="vertical" :column="2" border>
      <el-descriptions-item label="用户名">
        {{ person.username }}
        <el-button size="mini" type="primary" @click="dialogVisible = true"
          >修改密码</el-button
        >
      </el-descriptions-item>
      <el-descriptions-item label="手机号">{{
        person.phone
      }}</el-descriptions-item>
      <el-descriptions-item label="银行卡号" :span="2">{{
        person.bank_card
      }}</el-descriptions-item>
            <el-descriptions-item label="银行卡余额" :span="2">{{
        person.amount
      }}
        <el-button size="mini" type="primary" @click="rechargeVisible = true"
          >充值</el-button
        >
      </el-descriptions-item>
      <el-descriptions-item label="身份证号" :span="2">{{
        person.id_card
      }}</el-descriptions-item>
      <el-descriptions-item label="年龄">
        <el-tag size="small">{{ person.age }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="电子邮箱">{{
        person.email
      }}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
import { reqQueryUserInfo } from "@/api/index.js"
export default {
  data () {
    return {
      //password
      dialogVisible: false,
      form: {
        password: "",
      },
      rules: {
        password: [
          { required: true, message: "请输入新密码", trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur",
          },
        ],
      },
      //recharge
      rechargeVisible: false,
      rechargeForm: {
        amount: 0,
      },
      rechargeRules: {
        amount: [
          { required: true, message: "请输入充值金额", trigger: "blur" },
        ],
      },
      //person info
      person: {
        id: 12,
        username: "kooriookami",
        phone: "18100000000",
        bank_card: "3269519184915",
        amount: 10000,
        password: "11111",
        id_card: "26519951159",
        age: "22",
        email: "kevin08@qq.com",
      },
    }
  },

  methods: {
    handleClose () {
      this.dialogVisible = false
    },
    updatePassword () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          // 执行登录逻辑
          console.log("修改密码成功")
        }
      })
      this.person.password = "123456"
      //根据person的id发送请求更新密码的请求
    },

    //recharge
    handleRechargeClose() {
      this.rechargeVisible = false
    },

    recharge() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          // 执行充值逻辑
          console.log("充值成功")
        }
      })
    },
  },

  mounted () {
    //根据用户id查询用户信息
    const userid = sessionStorage.getItem("id")
    console.log(userid + '---')
    reqQueryUserInfo({
      id: userid,
    }).then((res) => {
      console.log(res.data)
      // this.person = res.data;
    }).catch((err) => {
      console.log(err)
    })
  },
};
</script>

<style>
</style>
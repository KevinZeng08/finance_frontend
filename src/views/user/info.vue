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
            :min="1"
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
        {{ person.c_name }}
        <el-button size="mini" type="primary" @click="dialogVisible = true"
          >修改密码</el-button
        >
      </el-descriptions-item>
      <el-descriptions-item label="手机号">{{
        person.c_phone
      }}</el-descriptions-item>
      <el-descriptions-item label="银行卡号" :span="2">{{
        person.b_id
      }}</el-descriptions-item>
      <el-descriptions-item label="银行卡余额" :span="2"
        >{{ person.b_amount }}
        <el-button size="mini" type="primary" @click="rechargeVisible = true"
          >充值</el-button
        >
      </el-descriptions-item>
      <el-descriptions-item label="身份证号" :span="2">{{
        person.c_id_card
      }}</el-descriptions-item>
      <el-descriptions-item label="年龄">
        <el-tag size="small">{{ person.c_age }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="电子邮箱">{{
        person.c_mail
      }}</el-descriptions-item>
            <el-descriptions-item label="用户类型">{{
        person.c_type
      }}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
import { reqQueryUserInfo, reqChangePassword } from "@/api/index.js";
export default {
  data() {
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
          {pattern: /^\d+(\.\d+)?$/, message: "请输入有效的数字", trigger: "blur"}
        ],
      },
      //person info
      person: {
        c_id: 12,
        c_name: "kooriookami",
        c_phone: "18100000000",
        b_id: "3269519184915",
        b_amount: 10000,
        c_password: "11111",
        c_id_card: "26519951159",
        c_age: "22",
        c_mail: "kevin08@qq.com",
        c_type: ""
      },
    };
  },

  methods: {
    handleClose() {
      this.dialogVisible = false;
    },
    updatePassword() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          // 更改密码
          reqChangePassword({
            id: this.person.c_id,
            password: this.person.c_password,
          }).then((res) => {
            if (res.data.code === "200") {
              console.log("修改密码成功");
            } else if (res.data.code === "404") {
              console.log("修改密码失败");
            }
          }
          );
          console.log("修改密码成功");
        }
      });
      this.person.c_password = "123456";
      //根据person的id发送请求更新密码的请求
    },

    //recharge
    handleRechargeClose() {
      this.rechargeVisible = false;
    },

    recharge() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          // 执行充值逻辑
          console.log("充值成功");
        }
      });
    },

    queryUserInfo() {
      //根据用户id查询用户信息
      const userid = sessionStorage.getItem("id");
      console.log(userid + "---");
      reqQueryUserInfo({
        id: userid,
      })
        .then((res) => {
          if(res.data.code === "200") {
            console.log(res.data);
            this.person = res.data.data;
          } else if(res.data.code === "404") {
            console.log(res.data.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  mounted() {
    this.queryUserInfo();
  },
};
</script>

<style>
</style>
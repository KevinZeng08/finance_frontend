<template>
  <el-form
    label-width="70px"
    :inline="true"
    class="login-container"
    :model="form"
    :rules="rules"
  >
    <h3 style="text-align: center">系统登录</h3>
    <el-form-item label="用户名" prop="username">
      <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        type="password"
        v-model="form.password"
        placeholder="请输入密码"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-radio v-model="type" label="1">用户</el-radio>
      <el-radio v-model="type" label="2">管理员</el-radio>
    </el-form-item>
    <el-form-item>
      <el-button @click="sumbit" type="primary">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {reqUserLogin} from "@/api/index";
export default {
  methods: {
    //登录
    sumbit () {
      if (this.type === "1") {
        reqUserLogin(this.form).then((res)=>{
          if(res.data.code === "200") {
            sessionStorage.setItem('id', res.data.data[0].c_id)
            this.$router.push({ name: 'userHome' })
          }
          else if(res.data.code === "404") {
            this.$message({
              message: res.data.data,
              type: 'error'
            })
          }
        })
        
      }
      if (this.type === "2") {
        this.$router.push({ name: 'admin' })
      }
    }
  },
  data () {
    return {
      type: '',
      form: {
      },
      rules: {
        username: {
          required: true,
          trigger: 'blur',
          message: '请输入用户名'
        },
        password: {
          required: true,
          trigger: 'blur',
          message: '请输入密码'
        }
      }
    }
  },
}
</script>

<style scoped>
.login-container {
  width: 350px;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 25px #cac6c6;
  box-sizing: border-box;
}
.el-input {
  width: 198px;
}
.el-button {
  margin: 10px 105px 0;
}
</style>
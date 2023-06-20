<template>
  <!-- 侧边目录，嵌在Main里面 -->
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <h3>金融管理系统</h3>
    <!-- 多级菜单 -->
    <!-- <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航一</span>
      </template>
      <el-menu-item-group>
        <span slot="title">分组一</span>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <span slot="title">选项4</span>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu> -->
    <el-menu-item index="1" @click="clickCard">
      <i class="el-icon-menu"></i>
      <span slot="title">个人信息</span>
    </el-menu-item>
    <el-menu-item index="2" @click="clickProperty">
      <i class="el-icon-menu"></i>
      <span slot="title">资产管理</span>
    </el-menu-item>
    <el-menu-item index="3" @click="clickFund">
      <i class="el-icon-document"></i>
      <span slot="title">基金购买</span>
    </el-menu-item>
    <el-menu-item index="4" @click="clickFinance">
      <i class="el-icon-setting"></i>
      <span slot="title">理财产品购买</span>
    </el-menu-item>
    <el-menu-item index="5" @click="clickInsurance">
      <i class="el-icon-setting"></i>
      <span slot="title">保险购买</span>
    </el-menu-item>
  </el-menu>
</template>

<style scoped>
h3 {
  text-align: center;
  color: #fff;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100vh;
}
</style>

<script>
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    clickCard () {
      this.$router.push({
        name: 'userInfo'
      },
        () => { },
        () => { }
      )
    },
    clickProperty() {
      this.$router.push({
          name: 'userProperty'
      },
        () => { },
        () => { }
      )
    },
    clickFund () {
      this.$router.push({
        name: 'userFund'
      },
        () => { },
        () => { }
      )
    },
    clickFinance () {
      this.$router.push({
        name: 'userFinanceproduct'
      },
        () => { },
        () => { }
      )
    },
    clickInsurance () {
      this.$router.push({
        name: 'userInsurance'
      },
        () => { },
        () => { }
      )
    }
  },

}

</script>
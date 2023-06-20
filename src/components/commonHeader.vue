<template>
  <div class="header-cintainer">
    <div class="left">
      <h2>{{ version }}版</h2>
    </div>
    <div class="right">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <img class="userPicture" src="../assets//images/user.png" alt="" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      version: ''
    }
  },
  methods: {
    handleCommand () {
      console.log('123')
      this.$router.push({ name: 'login' })
    }
  },
  mounted () {
    if (this.$route.meta.flag === 0) {
      this.version = '用户'
    } else {
      this.version = '管理'
    }
  },

}
</script>

<style scoped>
.header-cintainer {
  height: 60px;
  background-color: #333;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 0 10px;
  color: #fff;
}
.userPicture {
  height: 40px;
  width: 40px;
  border-radius: 50vh;
}
</style>
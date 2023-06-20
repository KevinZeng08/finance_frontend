<template>
  <el-container>
    <el-aside width="200px">
      <commonAsideUser></commonAsideUser>
    </el-aside>
    <el-container>
      <el-header> <commonHeader></commonHeader></el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
import commonAsideUser from '@/components/commonAsideUser.vue'
import commonHeader from '@/components/commonHeader.vue'
export default {
  components: { commonAsideUser, commonHeader },
}
</script>

<style scoped>
.el-header {
  padding: 0;
}
</style>
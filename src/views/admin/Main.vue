<template>
  <el-container>
    <el-aside width="200px">
      <commonAsideAdmin></commonAsideAdmin>
    </el-aside>
    <el-container>
      <el-header> <commonHeader></commonHeader></el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
import commonAsideAdmin from '@/components/commonAsideAdmin.vue'
import commonHeader from '@/components/commonHeader.vue'
export default {
  components: { commonAsideAdmin, commonHeader },
}
</script>

<style>
.el-header {
  padding: 0;
}
</style>
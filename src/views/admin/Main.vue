<template>
  <el-container>
    <el-aside width="200px">
      <commonAsideAdmin></commonAsideAdmin>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
import commonAsideAdmin from '@/components/commonAsideAdmin.vue'
export default {
  components: { commonAsideAdmin },
}
</script>

<style>
</style>
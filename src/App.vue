<template>
  <div id="app">
    <CommonHeader></CommonHeader>
    <CommonAside></CommonAside>
  </div>
</template>

<script>
import CommonHeader from './components/CommonHeader.vue'
import CommonAside from './components/CommonAside.vue'
export default {
  name: 'App',
  components: {
    CommonHeader, CommonAside
  }
}
</script>

<style>
</style>

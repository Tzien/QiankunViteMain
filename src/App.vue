<template>
  <div class="MainAppVue">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <el-menu-item index="/">主应用Home</el-menu-item>
      <el-menu-item index="/about">主应用About</el-menu-item>
      <el-menu-item index="/subHomePage">子应用</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
  <!-- 子应用绑定容器 -->
  <div id="qiankun-subAppContainer"></div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const activeIndex = ref('/')
const handleSelect = (key, keyPath) => {
  router.push({ path: key })
}
</script>
<style>
body {
  margin: 0px;
}
</style>

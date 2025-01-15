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
      <el-button style="margin-top: 10px" @click="changeToMain()">
        改变消息为：主应用实例
      </el-button>
    </el-menu>
    <router-view></router-view>
  </div>
  <!-- 子应用绑定容器 -->
  <div id="qiankun-subAppContainer"></div>
</template>
<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/store'
const router = useRouter()
const messageStore = useMessageStore()

function changeToMain() {
  messageStore.setMessage('主应用实例')
}

const activeIndex = ref('/')
const handleSelect = (key, keyPath) => {
  router.push({ path: key })
}

//设置全局通信
import actions from './actions'

//因为路由不能持久化存储，所以子应用单独获取动态路由数据
const piniaExample = ref({
  messageStore: messageStore,
})
/* 设置全局状态 */
actions.setGlobalState(piniaExample.value)
/* 获取全局状态 */
actions.onGlobalStateChange((state, prev) => {
  //state:变更后的状态；prev:变更前的状态
  piniaExample.value = state
})

watch(piniaExample.value, (newValue, oldValue) => {
  piniaExample.value = newValue
  actions.setGlobalState(piniaExample.value)
})
</script>
<style>
body {
  margin: 0px;
}
</style>

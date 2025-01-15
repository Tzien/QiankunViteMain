<template>
  <div style="margin-top: 200px; margin-left: 200px; font-size: 25px">
    这是主应用的Home页面
  </div>
  <div
    style="margin-top: 200px; margin-left: 200px; font-size: 25px; color: blue"
  >
    {{ messageStore.message }}
  </div>
</template>
<script setup>
import { useMessageStore } from '@/store/index'
const messageStore = useMessageStore()
</script>

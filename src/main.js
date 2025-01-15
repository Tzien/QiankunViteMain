import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from '@/store/index'
// 主应用入口文件 main.js 或者 app.js
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#mainApp') //修改挂载容器(包括index.html)，建议主子应用都别用app,定义好不重复的名称，不然容易出现挂载异常

import { registerMicroApps, start } from 'qiankun'
registerMicroApps(
  [
    {
      name: 'qiankun-subApp', // 子应用的名称
      entry: '//localhost:5555', // 子应用的入口地址
      container: '#qiankun-subAppContainer', // 挂载的DOM元素
      activeRule: '/subHomePage', // 激活子应用的路由规则(子应用首次访问的路由地址)
    },
  ],
  {
    //还有一些生命周期 如果需要可以根据官网文档按需加入
    beforeMount(app) {
      console.log('挂载前', app)
    },
    afterMount(app) {
      console.log('卸载后', app)
    },
  }
)

start({
  prefetch: false, //取消预加载
  sandbox: { experimentalStyleIsolation: true }, //沙盒模式
})

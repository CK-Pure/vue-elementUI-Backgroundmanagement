// @ts-nocheck
import Vue from 'vue'
import App from '../src/App.vue'
import router from '../router'

// 引入elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' 

// 注入插件
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App), 
}).$mount('#app')

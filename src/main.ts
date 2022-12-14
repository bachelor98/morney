import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Nav from '@/components/Nav.vue'
import Layout from '@/components/Layout.vue'
import Icon from '@/components/Icon.vue'
import store from './store'


Vue.config.productionTip = false

Vue.component('Nav',Nav) //全局组件
Vue.component('Layout',Layout)
Vue.component('Icon',Icon)





new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

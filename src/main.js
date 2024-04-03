import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ArticleItem from './views/components/ArticleItem.vue'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.component('ArticleItem', ArticleItem)
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import ArticleItem from './views/components/ArticleItem.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'vant/lib/index.less'
import router from './router'

Vue.component('ArticleItem', ArticleItem)
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

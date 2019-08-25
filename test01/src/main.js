import Vue from 'vue'
import App from './App.vue'

// VueにVuexを登録
//Vue.use(Vuex)

/*import windowPlugin from './scroll'
Vue.use(windowPlugin);*/

Vue.config.productionTip = false





new Vue({
  render: h => h(App),
}).$mount('#app')



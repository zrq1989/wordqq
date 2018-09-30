import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import fastClick from 'fastclick'


Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
    render: h => h(App),
    router
}).$mount('#app')

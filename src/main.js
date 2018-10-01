import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import fastClick from 'fastclick'
import './styles/ydreset.css'
import './styles/borders.css'
import './styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
    render: h => h(App),
    router
}).$mount('#app')

import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './style/font-awesome.min.css'

Vue.use(Element)

new Vue({
    el: "#app",
    router,
    store,
    render:(h)=>h(App)
})

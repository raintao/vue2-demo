import Vue from 'vue'
import router from './router'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './style/font-awesome.min.css'
Vue.use(Element)
new Vue({
    el: "#app",
    router,
    render:(h)=>h(App)
})

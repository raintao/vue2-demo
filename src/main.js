import Vue from 'vue'
import router from './router'
import App from './App.vue'
import Vuex from 'vuex'

import 	VueResourse from 'vue-resource'
Vue.use(VueResourse)

import './static/css/neat-min.css'
import './static/css/iconfont.css'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


new Vue({
    el: "#app",
    router,
    render:(h)=>h(App)
})

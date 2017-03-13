import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
const Home = r => require.ensure([], () => r(require('../pages/appStore/Home')))
const User = r => require.ensure([], () => r(require('../pages/appStore/User')))
const About = r => require.ensure([], () => r(require('../pages/appStore/About')))
const Other = r => require.ensure([], () => r(require('../pages/appStore/other')))
const Friend = r => require.ensure([], () => r(require('../pages/appStore/friend')))



Vue.use(Router)

const routes = [{
  path:'/',component:App,
  children:[
    { path: "",redirect:"/home" },
    { path: "/home",component: Home},
    { path: "/user", component: User },
    { path: "/friend", component: Friend },
    { path: "/about", component: About },
    { path: "/other", component: Other }
  ]
}]

export default new Router({
    routes,linkActiveClass:"my-active"
})

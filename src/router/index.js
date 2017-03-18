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
    { path: "",redirect:"/home/child2" },
    {
      path: "/home",component: Home,
      children:[
        {path:"",component:Router1},
        {path:"child1",component:Router1},
        {path:"child2",component:Router2}
      ]
    },
    { path: "/user", component: User },
    { path: "/friend", component: Friend },
    { path: "/about", component: About },
    { path: "/other", component: Other }
  ]
}]

export default new Router({
    routes,linkActiveClass:"my-active"
})

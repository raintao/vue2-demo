import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
const Home = r => require.ensure([], () => r(require('../page/Home')))
const User = r => require.ensure([], () => r(require('../page/User')))
const About = r => require.ensure([], () => r(require('../page/About')))
const Other = r => require.ensure([], () => r(require('../page/Other')))

Vue.use(Router)

const routes = [{
  path:'/',component:App,
  children:[
    { path: "", component: Home },
    { path: "/home", component: Home },
    { path: "/user", component: User },
    { path: "/about", component: About },
    { path: "/other", component: Other }
  ]
}]

export default new Router({
    routes
})

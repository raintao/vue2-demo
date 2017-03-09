import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
const Home = r => require.ensure([], () => r(require('../page/Home')))
const User = r => require.ensure([], () => r(require('../page/User')))
const About = r => require.ensure([], () => r(require('../page/About')))
const Other = r => require.ensure([], () => r(require('../page/Other')))
const Router1 = r => require.ensure([], () => r(require('../page/router1')))
const Router2 = r => require.ensure([], () => r(require('../page/router2')))
const childRouter = r => require.ensure([], () => r(require('../components/router')))

Vue.use(Router)

const routes = [{
  path:'/',component:App,
  children:[
    { path: "", component: Home },
    {
      path: "/home",component: Home,
      children:[
        {path:"",component:Router1},
        {path:"child1",component:Router1},
        {path:"child2",component:Router2}
      ]
    },
    { path: "/user", component: User },
    { path: "/about", component: About },
    { path: "/other", component: Other }
  ]
}]

export default new Router({
    routes
})

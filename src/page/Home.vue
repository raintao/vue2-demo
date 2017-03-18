<template>
    <div class="home">
        <h1>{{msg}}</h1>
        <router-link to="/other" class="other">go to Other</router-link>
        <el-row>
            <el-col :span="24">
              <el-menu default-active="5" class="el-menu-demo" mode="horizontal" @select="">
                <el-menu-item index="1" @click="jump('/about')">高级插件</el-menu-item>
                <el-menu-item index="2">在线商城</el-menu-item>
                <el-menu-item index="3">客户管理</el-menu-item>
                <el-menu-item index="4">系统设置</el-menu-item>
                <el-menu-item index="5">活动发布</el-menu-item>
              </el-menu>
            </el-col>
        </el-row>
        <br>
        <button type="button" name="button" @click="addIncrement">
          点击store,count加一
        </button>
        <p>{{count}}</p>
        <ul class="routeChild">
          <li><router-link to="/home/child1" class="">子路由1</router-link></li>
          <li><router-link to="/home/child2" class="">子路由2</router-link></li>
        </ul>
        <button type="button" name="button" @click="addIncrement">
          点击store,count加一
        </button>
        <router-view></router-view>
        <footer-nav></footer-nav>
    </div>
</template>

<script>
    import FooterNav from '../components/footer'
    import {mapState,mapActions} from 'vuex'
    export default {
        name: "Home",
        data() {
            return {
                msg: "hello Home"
            }
        },
        computed:mapState(['count']),
        components:{FooterNav},
        methods:mapActions(['addIncrement'])
    }

</script>
<style lang="scss" scoped>
  .home{
    text-align: center;
    >h1{
      margin:20px 0;
    }
    >.other{
      color: red;
    }
  }
  .routeChild{
    .router-link-active{
      color:red;
    }
    overflow: hidden;
    >li{
      float: left;
      margin: 20px;
      line-height: 20px;
    }
  }
</style>

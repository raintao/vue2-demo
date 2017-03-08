<template>
    <div>
        <h1>{{msg}}</h1>
        <el-row>
            <el-col :span="24">
              <el-menu default-active="5" class="el-menu-demo" mode="horizontal" @select="">
                <el-menu-item index="1">高级插件</el-menu-item>
                <el-menu-item index="2">在线商城</el-menu-item>
                <el-menu-item index="3">客户管理</el-menu-item>
                <el-menu-item index="4">系统设置</el-menu-item>
                <el-menu-item index="5">活动发布</el-menu-item>
              </el-menu>
            </el-col>
        </el-row>
        <router-link to="/other">go to Other</router-link>
        <footer-nav></footer-nav>
    </div>
</template>

<script>
    import FooterNav from '../components/footer'
    export default {
        name: "Home",
        data() {
            return {
                msg: "hello Home"
            }
        },
        components:{FooterNav}
    }

</script>

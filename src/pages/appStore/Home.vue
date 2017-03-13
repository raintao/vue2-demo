<template>
    <div class="home">
    <mt-header fixed title="固定在顶部"></mt-header>
        <h1>{{msg}}</h1>
        <router-link to="/other" class="other">go to Other</router-link>
        <button @click="getJson()">jsonp交互</button>
        <template v-for='item in items'>
          <div class="contList">
            <h2>{{item.title}}</h2>
            <img :src="item.images.small" alt="">
          </div>
        </template>
        <router-view></router-view>
        <footer-nav></footer-nav>
    </div>
</template>

<script>
    import FooterNav from '../../components/appStore/footer'
    export default {
        name: "Home",
        data() {
            return {
                msg: "hello Home",
                items:[]
            }
        },
        components:{FooterNav},
        methods:{
          getJson:function(){
            this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10p').then((res)=>{
              console.log(res);
              this.items=res.body.subjects;
            },(err)=>{
              console.log(err);
            });
          }
        }
    }

</script>

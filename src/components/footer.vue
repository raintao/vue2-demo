<template>
    <div class="footer">
        <router-link class="footerNav" to="/home" tag='div'>
          <i class="icon-home"></i>
          <span>主页</span>
        </router-link>
        <router-link class="footerNav" to="/about" tag='div'>
          <i class="icon-comment"></i>
          <span>消息</span>
        </router-link>
        <router-link class="footerNav" to="/friend" tag='div'>
          <i class="icon-group"></i>
          <span>人脉</span>
        </router-link>
        <router-link class="footerNav" to="/user" tag='div'>
          <i class="icon-user homeColor"></i>
          <span>我</span>
        </router-link>
    </div>
</template>

<script>
    export default {

    }

</script>

<style lang='scss' scoped>
  .footer{
    position:fixed;
    left:0;
    bottom:0;
    display: flex;
    display: -webkit-flex;
    width:100%;
    .footerNav{
      flex: 1;
      text-align: center;
      padding:5px 0;
      >i{
        font-size: 23px;
      }
      >span{
        display: block;
        font-size: 12px;
        margin-top: 5px;
      }
    }
    .router-link-active{
      i,span{color:red;}
    }
  }
</style>

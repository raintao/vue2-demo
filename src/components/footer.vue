<template>
    <div class="footer">
        <router-link class="footerNav" to="/home" tag='div'>Home</router-link>
        <router-link class="footerNav" to="/about" tag='div'>About</router-link>
        <router-link class="footerNav" to="/user" tag='div'>User</router-link>
    </div>
</template>

<script>
    export default {
        name:"app",
        data() {
            return {
                msg: "hello Vue"
            }
        }
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
      padding:10px 0;
    }
  }
</style>

<template>
    <div>
        <h1>{{msg}}</h1>
        <button type="button" name="button" @click="jump">返回home</button><br><br>
        <button type="button" name="button" @click="addIncrement">
          点击store,count加一
        </button>
        <p>{{count}}</p>
    </div>
</template>

<script>
   import router from '../router'
   import {mapState,mapActions} from 'vuex'
   export default {
        name: "Other",
        data() {
            return {
                msg: "hello Other"
            }
        },
        computed:mapState(['count']),
        methods:{
          // ...mapActions(['addIncrement']),
          addIncrement(){
            this.$store.dispatch('addIncrement')
          },
          jump:function(){
            router.go(-1);
          }
        }
    }

</script>

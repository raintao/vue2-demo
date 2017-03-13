<template>
    <div>
        <h1>{{msg}}</h1>
        <button type="button" name="button" @click="jump">返回home</button>
    </div>
</template>

<script>
   import router from '../../router'
    export default {
        name: "Other",
        data() {
            return {
                msg: "hello Other"
            }
        },
        methods:{
          jump:function(){
            router.go(-1);
          }
        }
    }

</script>

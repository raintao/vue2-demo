<template>
    <div>
        <h1>{{msg}}</h1>
        <mt-button type="default">json交互</mt-button>
        <footer-nav></footer-nav>
    </div>
</template>

<script>
    import FooterNav from '../../components/appStore/footer'
    export default {
        name: "User",
        data() {
            return {
                msg: "hello User"
            }
        },
        components:{FooterNav}
    }

</script>

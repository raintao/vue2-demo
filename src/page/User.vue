<template>
    <div>
        <h1>{{msg}}</h1>
        <footer-nav></footer-nav>
    </div>
</template>

<script>
    import FooterNav from '../components/footer'
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

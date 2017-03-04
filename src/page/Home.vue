<template>
    <div>
        <h1>{{msg}}</h1>
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

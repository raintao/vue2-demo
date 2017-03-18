<template>
    <div>
        <h1>{{msg}}</h1>
        <footer-nav></footer-nav>
    </div>
</template>

<script>
    import FooterNav from '../components/footer'
    export default {
        name: "Friend",
        data() {
            return {
                msg: "hello friends"
            }
        },
        components:{FooterNav}
    }

</script>

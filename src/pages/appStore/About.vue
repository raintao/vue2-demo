<template>
    <div>
        <h1>{{msg}}</h1>
        <footer-nav></footer-nav>
    </div>
</template>

<script>
    import FooterNav from '../../components/appStore/footer'
    export default {
        name: "About",
        data() {
            return {
                msg: "hello About"
            }
        },
        components:{FooterNav}
    }

</script>

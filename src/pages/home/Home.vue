<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <div>12313</div>
    </div>
</template>

<script>
    import HomeHeader from './components/Header'
    import HomeSwiper from './components/Swiper'

    export default {
        name: "Home",
        components: {HomeSwiper, HomeHeader},
        comments: {
            HomeHeader: HomeHeader
        }
    }
</script>

<style scoped>

</style>
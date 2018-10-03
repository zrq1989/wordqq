<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <Icons></Icons>
    </div>
</template>

<script>
    import HomeHeader from './components/Header'
    import HomeSwiper from './components/Swiper'
    import Icons from './components/icons'

    export default {
        name: "Home",
        components: {Icons, HomeSwiper, HomeHeader},
    }
</script>

<style scoped lang="less">

</style>
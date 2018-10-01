<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img class="swiper-img" src="./../../../assets/images/24decb5702854302.jpg_750x200_fc792650.jpg"/>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination'
                },
                swiperList: [
                    {
                        id: '0001',
                        imgUrl: './../../../assets/images/24decb5702854302.jpg_750x200_fc792650.jpg'
                    }, {
                        id: '0002',
                        imgUrl: './../../../assets/images/7599053a2cb2ee02.jpg_750x200_c61be0c1.jpg'
                    }
                ]

            }
        }
    }
</script>

<style scoped lang="less">
    .wrapper {
        /*overflow: hidden;*/
        width: 100%;
        height: 31.25vm;
        background: #666;
        /*padding-bottom: 31.25%;*/
        .swiper-img {
            width: 100%;
        }
    }
</style>
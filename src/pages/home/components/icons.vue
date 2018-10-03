<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon"
                     v-for="item in page"
                     :key="item.id"
                >
                    <div class="icon-image">
                        <img class="icon-img-context" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">
                        {{ item.desc }}
                    </p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "icons",
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination'
                },
                iconList: [{
                    id: "0001",
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                    desc: "景点门票"
                }, {
                    id: "0002",
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
                    desc: "北京旅游"
                }, {
                    id: "0003",
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
                    desc: "一日游"
                }, {
                    id: "0004",
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
                    desc: "一日游"
                }, {
                    id: "0005",
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
                    desc: "一日游"
                }, {
                    id: "0006",
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
                    desc: "一日游"
                }, {
                    id: "0007",
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
                    desc: "一日游"
                }, {
                    id: "0008",
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
                    desc: "一日游"
                }, {
                    id: "0009",
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
                    desc: "一日游"
                }
                ]
            }
        },
        computed: {
            pages() {
                const pages = []
                this.iconList.forEach((item, index) => {
                    const page = Math.floor(index / 8)
                    if (!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(item)
                })
                return pages
            }
        }
    }
</script>

<style scoped lang="less">
    .icons > .swiper-container {
        height: 0;
        padding-bottom: 50%;
    }

    .icons {
        .icon {
            position: relative;
            float: left;
            width: 25%;
            padding-bottom: 25%;
            height: 0;
            .icon-image {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 2.2rem;
                box-sizing: border-box;
                .icon-img-context {
                    display: block;
                    margin: 0 auto;
                    height: 100%;
                }
            }
            .icon-desc {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                box-sizing: border-box;
                height: 2.2rem;
                line-height: 2.2rem;
                color: #333;
                text-align: center;
                overflow: hidden;
                white-space: normal;
                text-overflow: ellipsis;
            }
        }
    }

</style>
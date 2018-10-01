<template>
    <div class="header" id="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/游玩/景点
        </div>
        <div class="header-right">
            城市
            <span class="iconfont arro-icon">&#xe6aa;</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader"
    }
</script>

<style scoped lang="less">

    #header {
        line-height: 4.3rem;
        display: flex;
        background: #00bcd4;
        color: #fff;

        .header-left {
            width: 3.2rem;
            float: left;
            .back-icon {
                text-align: center;
                line-height: 4.3rem;
                font-size: 2rem;
            }
        }
        .header-input {
            flex: 1;
            height: 2.6rem;
            line-height: 2.6rem;
            background: #fff;
            border-radius: 0.5rem;
            color: #000;
            text-align: left;
            margin-top: 1rem;
            margin-bottom: 0.6rem;
            font-size: 1.2rem;
        }
        .header-right {
            width: 6.2rem;
            float: right;
            font-size: 1.2rem;
            .arro-icon {
                font-size: 2rem;
            }
        }
    }


</style>
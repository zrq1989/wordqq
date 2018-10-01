<template>
    <div class="header" id="header">
        <div class="header-left">返回</div>
        <div class="header-input">内容</div>
        <div class="header-right">城市</div>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader"
    }
</script>

<style scoped lang="less">

    #header {

        display: flex;
        line-height: 4.3rem;
        background: #00bcd4;
        color: #fff;

        .header-left {
            width: 3.2rem;
            float: left;

        }
        .header-input {
            flex: 1;
            background: #fff;
            border-radius: 0.5rem;
            color: #000;
            text-align: center;
        }
        .header-right {
            width: 6.2rem;
            float: right;
        }
    }


</style>
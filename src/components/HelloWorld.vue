<template>
    <div class="hello">
        <button type="button" @click="changeClick">change</button>
        sss
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        methods: {
            changeClick() {
                this.$http.get('./index.php').then((res) => console.log(res.data)).catch((res) => console.log(res))
            }
        }
    }
</script>

<style scoped>


</style>

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
                this.$http.get('./index.php').then((res) => console.log(res.data))
            }
        }
    }
</script>

<style scoped>


</style>

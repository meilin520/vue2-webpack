<template>
    <div id="App">
        <router-link to="/">首页</router-link>
        <router-link to="/content">内容</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style scoped lang="scss">
    #App{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
    }
</style>
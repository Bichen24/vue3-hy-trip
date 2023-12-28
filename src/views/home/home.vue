<template>
    <div class="home">
        <HomeNavBar></HomeNavBar>
        <div class="banner">
            <img src="@\assets\img\home\banner.webp" alt="">
        </div>
        <HomeSearchBox></HomeSearchBox>
    </div>
</template>

<script setup>
// import { ref } from "vue";
import HomeNavBar from "./copns/home-nav-bar.vue";
import HomeSearchBox from "./copns/home-serach-box.vue";
</script>

<style lang="less" scoped>
.banner {
    img {
        width: 100%;
    }
}
</style>
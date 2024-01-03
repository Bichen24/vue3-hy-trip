<template>
    <div class="home">
        <HomeNavBar></HomeNavBar>
        <div class="banner">
            <img src="@\assets\img\home\banner.webp">
        </div>
        <HomeSearchBox></HomeSearchBox>
        <HomeCategory />
        <HomeContent />
    </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home.js';
import HomeNavBar from "./copns/home-nav-bar.vue";
import HomeSearchBox from "./copns/home-serach-box.vue";
import HomeCategory from "./copns/home-category.vue";
import HomeContent from "./copns/home-content.vue";

//发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoryData()
homeStore.fetchHouseListData()
</script>

<style lang="less" scoped>
.banner {
    img {
        width: 100%;
    }
}
</style>
<template>
    <div class="home" ref="homeRef">
        <HomeNavBar></HomeNavBar>
        <div class="banner">
            <img src="@\assets\img\home\banner.webp">
        </div>
        <HomeSearchBox></HomeSearchBox>
        <HomeCategory />
        <SearchBar v-if="isShowSearch" />
        <HomeContent />
    </div>
</template>
<script>
export default {
    name: "home",
};
</script>
<script setup>
import useScroll from "@/hooks/useScroll.js";
import useHomeStore from '@/stores/modules/home.js';
import HomeNavBar from "./copns/home-nav-bar.vue";
import HomeSearchBox from "./copns/home-serach-box.vue";
import HomeCategory from "./copns/home-category.vue";
import HomeContent from "./copns/home-content.vue";
import SearchBar from "@/components/search-bar/search-bar.vue";
//发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoryData()
homeStore.fetchHouseListData()

const homeRef = ref()
const { scrollTop, isShowSearchBar, isBottom } = useScroll(homeRef);
watch(isBottom, (newValue, oldValue) => {
    if (newValue) {
        homeStore.fetchHouseListData().then(() => {
            isBottom.value = false;
        })
    }
})
const isShowSearch = computed(() => {
    return isShowSearchBar.value
})
onActivated(() => {
    homeRef.value?.scrollTo({
        top: scrollTop.value
    })
})
</script>

<style lang="less" scoped>
.home {
    padding-bottom: 13vw;
    overflow: auto;
    height: 100vh;
    box-sizing: border-box;
}

.banner {
    img {
        width: 100%;
    }
}
</style>
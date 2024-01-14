<template>
    <div class="tab-bar">
        <van-tabbar v-model="activeIndex" active-color="#ff9645" route>
            <template v-for="(item, index) in tabBarData" :key="item.text">
                <van-tabbar-item icon="home-o" :to="item.path">
                    <span>{{ item.text }}</span>
                    <template #icon>
                        <img v-if="index === activeIndex" :src="getUrl(item.imageActiveUrl)">
                        <img v-else :src="getUrl(item.imageUrl)">
                    </template>
                </van-tabbar-item>
            </template>
        </van-tabbar>
    </div>
</template>

<script setup>
import { ref } from "vue";
import tabBarData from "@/assets/data/tab-bar-data.js"
import { useRoute } from "vue-router";
import { getUrl } from "@/utils"
const activeIndex = ref(0);

const route = useRoute();
watch(route, (newRoute) => {
    activeIndex.value = tabBarData.findIndex(item => item.path === newRoute.path);
    console.log(activeIndex.value);
})
</script>

<style lang="less" scoped>
.tab-bar {
    img {
        height: 28px;
    }
}
</style>
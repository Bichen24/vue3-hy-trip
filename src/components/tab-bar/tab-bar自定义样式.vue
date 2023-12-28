<template>
    <div class="tab-bar">
        <van-tabbar v-model="activeIndex" active-color="#ff9645">
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
import { getUrl } from "@/utils"

const activeIndex = ref(0);
</script>

<style lang="less" scoped>
.tab-bar {
    :deep(.van-tabbar-item__text) {
        color: red;
        font-size: 50px;
    }
}
</style>
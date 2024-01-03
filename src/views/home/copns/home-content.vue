<template>
    <div class="content">
        <h2>酒店精选</h2>
        <ul>
            <template v-for="(item, index) in houseList" :key='item.data.houseId'>
                <li>
                    <div v-if="item.discoveryContentType === 9">
                        v9
                    </div>
                    <div v-else-if="item.discoveryContentType === 3">v9</div>
                </li>
            </template>
        </ul>
        <button @click=" homeStore.fetchHouseListData">加载更多</button>
    </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home.js';
import { storeToRefs } from 'pinia';
const homeStore = useHomeStore()
const { houseList } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
.content {
    overflow: auto;

}
</style>
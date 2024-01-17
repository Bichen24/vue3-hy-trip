<template>
    <div class="content">
        <h2>酒店精选</h2>
        <ul>
            <template v-for="item in houseList" :key='item.data.houseId'>
                <div v-if="item.discoveryContentType === 9" class="nith" @click="houseClick(item.data.houseId)">
                    <img :src="item.data.image.url">
                    <div class="all">
                        <span class="info">{{ item.data.summaryText }}</span>
                        <span class="location">{{ item.data.location }}</span>
                        <van-rate class="rate" :modelValue="Number(item.data.commentScore)" readonly allow-half />
                    </div>
                </div>
                <div v-else-if="item.discoveryContentType === 3" @click="houseClick(item.data.houseId)">
                    <img :src="item.data.image.url">
                    <span class="info">{{ item.data.summaryText }}</span>
                    <span class="location">{{ item.data.location }}</span>
                    <van-rate class="rate" :modelValue="Number(item.data.commentScore)" readonly allow-half />
                </div>
            </template>
        </ul>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import useHomeStore from '@/stores/modules/home.js';
import { storeToRefs } from 'pinia';
const homeStore = useHomeStore()
const { houseList } = storeToRefs(homeStore)
const router = useRouter()
const houseClick = (houseId) => {
    router.push('/detail/' + houseId)
}
</script>

<style lang="less" scoped>
.content {
    ul {
        display: flex;
        flex-wrap: wrap;

        div {
            display: flex;
            flex-wrap: wrap;
            width: 50%;

            img {
                width: 100%;
                flex: 1;
            }

            span {
                width: 100%;
            }

            .rate {
                width: 100%;
            }

        }

        .nith {
            .all {
                position: relative;
                left: 2vw;
                top: -15vw;
                display: flex;
                flex-wrap: wrap;
                width: 100%;
            }

        }
    }
}
</style>
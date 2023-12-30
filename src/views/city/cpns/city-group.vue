<template>
    <div class="city-group">
        <van-index-bar class="city-group" highlight-color="var(--primary-color)" :index-list="indexList">
            <van-index-anchor index="热门" />
            <div class="hot-cities">
                <ul>
                    <li v-for="(item, index) in hotCities" :key="item.cityId" @click="cityClick(item)">
                        <span>{{ item.cityName }}</span>
                    </li>
                </ul>
            </div>
            <template v-for="(citem, index) in gorupData" :key="citem.group">
                <van-index-anchor :index="citem.group">{{ citem.group }}</van-index-anchor>
                <van-cell v-for="(item, index) in citem.cities" :title="item.cityName" :key="item.cityId"
                    @click="cityClick(item)" />
            </template>
        </van-index-bar>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import useCityStore from "@/stores/modules/city.js";
import router from "@/router";
const props = defineProps({
    gorupData: {
        type: Array,
        default: () => ([])
    },
    text: {
        type: String,
        default: '热门'
    },
    hotCities: {
        type: Array,
        default: () => ([])
    }
})
let indexList = computed(() => {
    const index = props.gorupData.map(item => item.group);
    index.unshift('#');
    return index
})

//修改本地城市
const cityStore = useCityStore()

function cityClick(city) {
    cityStore.localCity = city;
    router.back();
}
</script>

<style lang="less" scoped>
.hot-cities {
    h3 {
        padding-left: 10px;
        font-weight: 400;
    }

    ul {
        display: flex;
        flex-wrap: wrap;

        li {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 25%;
            height: 35px;

            span {
                background-color: #fff4ec;
                width: 68%;
                height: 28px;
                border-radius: 15px;
                text-align: center;
                line-height: 28px;
            }
        }
    }
}
</style>
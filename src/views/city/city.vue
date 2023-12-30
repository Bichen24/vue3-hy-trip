<template>
    <div class="city top-page">
        <van-search v-model="searchValue" placeholder="请选择城市" shape="round" show-action @search="onSearch"
            @cancel="onCancel" />
        <van-tabs v-model:active="activeTabName" color="#ff8546" @click-tab="onClickTab">
            <template v-for="(value, key, index) in allCities" :key="key">
                <van-tab :title="value.title" :name="key">
                    <!-- <hot-city :cities="value.hotCities"></hot-city> -->
                    <city-group :gorupData="value.cities" :hotCities="value.hotCities"></city-group>
                </van-tab>
            </template>
        </van-tabs>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import useCityStore from "@/stores/modules/city.js";
import cityGroup from './cpns/city-group.vue'
// import hotCity from './cpns/hot-city.vue'
const router = useRouter();

//搜索框
const searchValue = ref('');

//搜素
function onSearch() {
    console.log(searchValue, "搜索了");
}
//取消

const onCancel = () => {
    router.back();
}



//网络请求获取全部城市数据
// const allCity = ref({})
// getCityAll().then(res => {
//     allCity.value = res.data
//     console.log(allCity.value);
// })

//城市模块
//使用store获取数据
const cityStore = useCityStore();
cityStore.fetchAllCitiesData();
const { allCities } = storeToRefs(cityStore);
//国内外标签栏 点击时获取活跃标签栏名
const activeTabName = ref("");
function onClickTab() {
    console.log(activeTabName.value);
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

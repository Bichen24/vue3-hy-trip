<template>
    <div class="city top-page">
        <van-search v-model="searchValue" placeholder="请选择城市" shape="round" show-action @search="onSearch"
            @cancel="onCancel" />
        <van-tabs v-model:active="activeName" color="#ff8546">
            <!-- <template v-for="(value, key, index) in allCities" :key="key">
                <van-tab :title="value.title" :name="key"></van-tab>
            </template> -->
            <van-tab v-for="(value, key, index) in allCities" :key="key" :name="key" :title="value.title"
                @click-tab="onClickTab">{{ key }}</van-tab>
        </van-tabs>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getCityAll } from "@/services";
import { storeToRefs } from "pinia";
import useCityStore from "@/stores/modules/city.js";

const router = useRouter();

//搜索框
const searchValue = ref('');

//搜素
function onSearch() {
    console.log(searchValue);
}
//取消

const onCancel = () => {
    router.back();
}

//国内外标签栏
const activeName = ref("")
function onClickTab() {
    console.log(activeName);
}

//网络请求获取全部城市数据
// const allCity = ref({})
// getCityAll().then(res => {
//     allCity.value = res.data
//     console.log(allCity.value);
// })

//使用store获取数据
const cityStore = useCityStore();
cityStore.fetchAllCitiesData();
const { allCities } = storeToRefs(cityStore);
</script>

<style lang="less" scoped></style>

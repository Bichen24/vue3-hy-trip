<template>
    <div class="city top-page">
        <van-search v-model="searchValue" placeholder="请选择城市" shape="round" show-action @search="onSearch"
            @cancel="onCancel" />
        <van-tabs v-model:active="activeTabName" color="#ff8546" @click-tab="onClickTab">
            <template v-for="(value, key, index) in allCities" :key="key">
                <van-tab :title="value.title" :name="key">
                    <div class="hot-cities">
                        <h3>热门</h3>
                        <ul>
                            <li v-for="(item, index) in allCities[activeTabName].hotCities" :key="item.cityId">
                                <span>{{ item.cityName }}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="other-cities">
                        <ul class="group" v-for="(Citem, index) in allCities[activeTabName].cities" :key="Citem.group"
                            :id="Citem.group">
                            <h3>{{ Citem.group }}</h3>
                            <li v-for="(item, index) in Citem.cities" :key="item.cityId">
                                <span>{{ item.cityName }}</span>
                            </li>
                        </ul>
                        <div class="lable">
                            <a v-for="Citem in allCities[activeTabName].cities" :key="Citem.group"
                                :href="'#' + Citem.group">
                                <span>{{ Citem.group }}</span>
                            </a>
                        </div>
                    </div>
                </van-tab>
            </template>
        </van-tabs>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import useCityStore from "@/stores/modules/city.js";

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
const activeTabName = ref("")
function onClickTab() {
    console.log(activeTabName.value);
}


</script>

<style lang="less" scoped>
.city {
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

    .other-cities {
        text-indent: .75em;

        h3,
        li {
            height: 35px;
            line-height: 35px;
        }


        .lable {
            display: flex;
            width: 1vw;
            flex-wrap: wrap;
            position: fixed;
            right: 20px;
            top: 37%;
            font-weight: 500;
            font-size: 3.5vw;
        }
    }

}
</style>

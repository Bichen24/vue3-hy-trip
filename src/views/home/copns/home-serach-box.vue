<template>
    <div class="home-search-box">
        <div class="location" @click="$router.push('/city')">
            <div class="city">{{ cityStore.localCity.cityName }}</div>
            <div class="position" @click="positionClick">
                <span>我的位置</span>
                <img src="@\assets\img\home\icon_location.png">
            </div>
        </div>
        <div class="date-range" @click="clickDate">
            <div class="start">
                <div class="date">
                    <span class="tips">入住</span>
                    <span class="time">{{ startDateStr }}</span>
                </div>
            </div>
            <div class="stay">
                共{{ staycount }}晚
            </div>
            <div class="end">
                <div class="date">
                    <span class="tips">离店</span>
                    <span class="time">{{ endDateStr }}</span>
                </div>
            </div>
        </div>
        <van-calendar v-model:show="showCalendar" @confirm="onConfirm" type="range" color="#ff9854" />
        <!-- 价格/人数选择 -->
        <div class="section price-counter bottom-gray-line">
            <div class="start">价格不限</div>
            <div class="end">人数不限</div>
        </div>
        <!-- 关键字 -->
        <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>
        <!-- 热门建议 -->
        <div class="section hot-suggests">
            <template v-for="(item, index) in hotSuggests" :key="index">
                <div class="item" :style="{ color: item.tagText.color, background: item.tagText.background.color }">
                    {{ item.tagText.text }}
                </div>
            </template>
        </div>
        <!-- 开始搜索 -->
        <div class="search-box">
            <button @click="searchPush">开始搜索</button>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { formatMonthDay, getDiffDays } from "@/utils/format_date.js"
import useHomeStore from "@/stores/modules/home.js";
import useMainStore from "@/stores/modules/main.js";
import { useRouter } from "vue-router"
const positionClick = () => {
    navigator.geolocation.getCurrentPosition(res => {
        console.log("成功", res);
    }, err => {
        console.error(err)
    });
}
//获取目标城市
import useCityStore from "@/stores/modules/city.js";
const cityStore = useCityStore()

//日期
const mainStore = useMainStore()
const { startDate, endDate, staycount } = storeToRefs(mainStore)
const startDateStr = computed(() => formatMonthDay(startDate.value))
const endDateStr = computed(() => formatMonthDay(endDate.value))
console.log(startDate.value, endDate.value);
//是否展示日期选择栏
const showCalendar = ref(false);
//日期选择完成回调
function clickDate() {
    showCalendar.value = !showCalendar.value;
}
function onConfirm(value) {
    showCalendar.value = !showCalendar.value;
    startDate.value = value[0];
    endDate.value = value[1];
    staycount.value = getDiffDays(value[0], value[1]);
    console.log(startDate.value, endDate.value);
}
//获取热门建议
const homeStore = useHomeStore();
const { hotSuggests } = storeToRefs(homeStore)

//searchBox
const router = useRouter();
function searchPush() {
    router.push({
        path: '/search',
        query: {
            startDate: startDate.value,
            endDate: endDate.value,
            currentCity: cityStore.localCity.cityName,
        }
    })
}
</script>

<style lang="less" scoped>
.location {
    display: flex;
    align-items: center;
    height: 1.875rem;
    line-height: 1.875rem;
    padding: 0 .625rem;
    background-color: #f2c3c3;

    .city {
        flex: 1;
    }

    .position {
        display: flex;
        align-items: center;
        height: 100%;
        width: 5rem;

        span {
            flex: 1;
        }

        img {
            height: 1.25rem;
            padding-bottom: .375rem;

        }
    }
}

.date-range {
    display: flex;
    height: 3.125rem;
    align-items: center;
    text-align: center;

    .stay,
    .start,
    .end {
        flex: 1;
        font-size: 3.8vw;

        .date {
            .tips {
                color: rgb(161, 161, 161);
                font-weight: 600;
                font-size: 2.8vw;
            }

            .time {
                display: block;

            }
        }
    }

}

.section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 10vw;
    color: #999;
    height: 2.75rem;

    .start {
        flex: 1;
        display: flex;
        height: 2.75rem;
        align-items: center;
    }
}

.hot-suggests {
    margin: .625rem 0;
    height: auto;

    .item {
        padding: .25rem .5rem;
        margin: .25rem;
        border-radius: .875rem;
        font-size: .75rem;
        line-height: 1;
    }
}

.search-box {
    display: flex;
    justify-content: center;

    button {
        padding: 2vw 7vw;
        border-radius: 2vw;
        width: 90%;
        border: 0;
        background-color: #ff9645;
        font-size: 6vw;
        height: 12vw;
        line-height: 9.7vw;
    }
}
</style>
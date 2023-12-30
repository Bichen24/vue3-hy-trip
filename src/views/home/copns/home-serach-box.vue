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
                    <span class="time">{{ startDate }}</span>
                </div>
            </div>
            <div class="stay">
                共一晚
            </div>
            <div class="end">
                <div class="date">
                    <span class="tips">离店</span>
                    <span class="time">{{ endDate }}</span>
                </div>
            </div>
        </div>
        <van-calendar v-model:show="showCalendar" @confirm="onConfirm" type="range" color="#ff9854" />
    </div>
</template>

<script setup>
import { formatMonthDay } from "@/utils/format_date.js"
const positionClick = () => {
    navigator.geolocation.getCurrentPosition(res => {
        console.log("成功", res);
    }, err => {
        logger.error(err)
    });
}
//获取目标城市
import useCityStore from "@/stores/modules/city.js";
const cityStore = useCityStore();

//日期
const nowDate = new Date()
const startDate = ref(formatMonthDay(nowDate));
const endDate = ref(formatMonthDay(nowDate.setDate(nowDate.getDate() + 1)));
//是否展示日期选择栏
const showCalendar = ref(true);
//日期选择完成回调
function clickDate() {
    showCalendar.value = !showCalendar.value;
}
function onConfirm(value) {
    showCalendar.value = !showCalendar.value;
    startDate.value = formatMonthDay(value[0]);
    endDate.value = formatMonthDay(value[1]);
    console.log(value);
}
</script>

<style lang="less" scoped>
.location {
    display: flex;
    align-items: center;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    background-color: #f2c3c3;

    .city {
        flex: 1;
    }

    .position {
        display: flex;
        align-items: center;
        height: 100%;
        width: 80px;

        span {
            flex: 1;
        }

        img {
            height: 20px;
            padding-bottom: 6px;

        }
    }
}

.date-range {
    display: flex;
    height: 50px;
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
</style>
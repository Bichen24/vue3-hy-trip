<template>
    <div class="search-bar">
        <div class="left">
            <div>
                <span>住</span>
                <span>{{ startDateStr }}</span>
            </div>
            <div>
                <span>离</span>
                <span>{{ endDateStr }}</span>
            </div>
        </div>
        <input type="text" placeholder="关键字/位置/民宿" class="middle">
        <button class="right">搜索</button>
    </div>
</template>

<script setup>
import useMainStore from "@/stores/modules/main.js";
import { storeToRefs } from "pinia";
import { formatMonthDay } from "@/utils/format_date.js";
const mainStore = useMainStore()
const { startDate, endDate } = storeToRefs(mainStore)
const startDateStr = computed(() => formatMonthDay(startDate.value, 'MM.DD'))
const endDateStr = computed(() => formatMonthDay(endDate.value, 'MM.DD')) 
</script>

<style lang="less" scoped>
.search-bar {
    position: fixed;
    top: 0;
    display: flex;
    width: 100vw;
    height: 10vw;
    padding: 2vw;
    background-color: #fff;

    .left {
        background-color: aqua;
        width: 15%;
    }

    .middle {
        flex: 1;
    }

    .right {
        margin-right: 3.5vw;
        width: 15%;
    }
}
</style>
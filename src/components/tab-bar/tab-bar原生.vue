<template>
    <div class="tab-bar">
        <router-link v-for="(item, index) in tabBarData" :key="item.text" :to="item.path" active-class="active"
            :class="{ 'tab-bar-item': true }" @click=changeIndex(index)>
            <img v-if="index === currintIndex" :src="getUrl(item.imageActiveUrl)">
            <img v-else :src="getUrl(item.imageUrl)">
            <span class="text">{{ item.text }}</span>
        </router-link>
    </div>
</template>

<script setup>
import tabBarData from "@/assets/data/tab-bar-data.js"
import { getUrl } from "@/utils"
let currintIndex = 0;
function changeIndex(index) {
    currintIndex = index
}
// const tabBarData = [
//     {
//         text: "首页",
//         path: "/home",
//         imageUrl: '../../assets/img/tabbar/tab_home.png',
//         imageActiveUrl: "../../assets/img/tabbar/tab_home_active.png",
//     }, {
//         text: "收藏",
//         path: "/favor",
//         imageUrl: "../../assets/img/tabbar/tab_favor.png",
//         imageActiveUrl: "../../assets/img/tabbar/tab_favor_active.png",
//     }, {
//         text: "订单",
//         path: "/order",
//         imageUrl: "../../assets/img/tabbar/tab_order.png",
//         imageActiveUrl: "../../assets/img/tabbar/tab_order_active.png",
//     }, {
//         text: "消息",
//         path: "/message",
//         imageUrl: "../../assets/img/tabbar/tab_message.png",
//         imageActiveUrl: "../../assets/img/tabbar/tab_home_active.png",
//     }
// ];
</script>

<style lang="less" scoped>
.tab-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    display: flex;
    border-top: 1px solid #d0d0d0;

    .tab-bar-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
            width: 40px;
        }

        .text {
            font-size: 15px;
        }
    }

    .active {
        color: #ff9854;
    }
}
</style>
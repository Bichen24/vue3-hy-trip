<template>
    <div class="detail-box" ref="detailRef">
        <tabControl :titles="names" v-if="true" class="tabs" @tabItemClick="itemclick" />
        <div class="detail" v-if="mainPart" v-memo="[mainPart]">
            <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="onClickLeft" class="navbar" />
            <detailSwipe :swipeData="mainPart.topModule.housePicture.housePics"></detailSwipe>
            <detailContent name="描述" :ref="getrefelm" :contentData="mainPart.topModule" v-if="mainPart" />
            <detailFacility name="服务" :ref="getrefelm"
                :facilityData="mainPart.dynamicModule.facilityModule.houseFacility" />
            <detailLandlord name="房东" :ref="getrefelm" :landlordData="mainPart.dynamicModule.landlordModule">
            </detailLandlord>
            <detailcomment name="评论" :ref="getrefelm" />
            <detailOrder name="预定" :ref="getrefelm" />
            <detailMap name="位置" :ref="getrefelm" />
            <detailPrice></detailPrice>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { getHouseDetailAll } from "@/services";
import { useRoute, useRouter } from "vue-router";
import detailSwipe from "./cpns/detail_01_swipe.vue";
import detailContent from "./cpns/detail_02_content.vue";
import detailFacility from "./cpns/detail_03_facility.vue";
import detailLandlord from "./cpns/detail_04_landlord.vue";
import detailcomment from "./cpns/detail_05-comment.vue";
import detailOrder from "./cpns/detail_06_order.vue";
import detailMap from "./cpns/detail_07_map.vue";
import detailPrice from "./cpns/detail_08_price.vue";
import tabControl from "@/components/tab-control/tab-control.vue"

import useScroll from "@/hooks/useScroll.js";
const router = useRouter()
const route = useRoute()
const houseId = route.params.id
const detailData = ref({})
const mainPart = computed(() => detailData.value.mainPart)
getHouseDetailAll(houseId).then(res => {
    detailData.value = res.data
})
function onClickLeft() {
    router.back()
}

const detailRef = ref()
const { scrollTop } = useScroll(detailRef)
//获取每个ref对应的元素
const sectionElm = ref({})
const names = ref([])
function getrefelm(value) {
    if (value && value.$el) {
        const name = value.$el.getAttribute("name")
        names.value.push(name)
        sectionElm.value[name] = value.$el
    }
}

function itemclick(index) {
    console.log();
    detailRef.value.scrollTo({
        top: sectionElm.value[names.value[index]].offsetTop - 44,
        behavior: "smooth"
    })
}
</script>

<style lang="less" scoped>
.detail-box {
    overflow-y: auto;
    height: 100vh;
}

.detail {
    margin-top: 44px;
    --van-nav-bar-text-color: var(--primary-color);
    --van-nav-bar-icon-color: var(--primary-color);
    --van-nav-bar-title-text-color: var(--primary-color);
}

.tabs {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
}
</style>
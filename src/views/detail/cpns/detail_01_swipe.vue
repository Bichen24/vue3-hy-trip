<template>
    <div class="swipe">
        <van-swipe>
            <template v-for="item in swipeData" :key="item.url">
                <van-swipe-item>
                    <img :src="item.url">
                </van-swipe-item>
            </template>
            <template #indicator="{ active, total }">
                <div class="indicator">
                    <span v-for="(value, key, index) in    swipeGroup   " :key="key"
                        :class="{ active: key == swipeData[active]?.enumPictureCategory }">
                        {{ formatStr(value[0].title) }}
                        <span class="page" v-if="key == swipeData[active]?.enumPictureCategory">
                            {{ getCurrentIndex(swipeData[active]) }}/{{ value.length }}
                        </span>
                    </span>
                </div>
            </template>
        </van-swipe>
    </div>
</template>

<script setup>
const props = defineProps({
    swipeData: {
        type: Array,
        default: () => []
    }
})
const swipeGroup = {}
for (const item of props.swipeData) {
    let valueArray = swipeGroup[item.enumPictureCategory];
    if (!valueArray) {
        valueArray = []
        swipeGroup[item.enumPictureCategory] = valueArray
    }
    swipeGroup[item.enumPictureCategory].push(item)
}
function formatStr(str) {
    return str.replace("：", "").replace("【", "").replace('】', '')
}
function getCurrentIndex(item) {
    let valueArray = swipeGroup[item.enumPictureCategory]
    return valueArray.findIndex(data => data === item) + 1
}
</script>

<style lang="less" scoped>
.swipe {
    .indicator {
        position: absolute;
        right: 5px;
        bottom: 5px;
        padding: 2px 5px;
        font-size: 12px;
        background: rgba(0, 0, 0, 0.5);
        color: white;

        span {
            margin: 1vw;
        }

        .active {
            font-size: 3.5vw;
            font-weight: 800;
            color: red;
        }
    }

    img {
        width: 100%;
    }
}
</style>
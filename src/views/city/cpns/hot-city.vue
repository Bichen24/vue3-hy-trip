<template>
    <div class="hot-cities">
        <h3>{{ text }}</h3>
        <ul>
            <li v-for="(item, index) in cities" :key="item.cityId">
                <span>{{ item.cityName }}</span>
            </li>
        </ul>
    </div>
</template>

<script setup>
defineProps({
    text: {
        type: String,
        default: '热门'
    },
    cities: {
        type: Array,
        default: () => ([])
    }
})
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
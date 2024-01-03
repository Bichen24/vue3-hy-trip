<template>
    <div class="category-vue">
        <ul>
            <li v-for="(item, index) in categories" :key="item.id">
                <img class="picture" :src="item.pictureUrl">
                <div class="title">{{ item.title }}</div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import useHomeStore from "@/stores/modules/home.js";
import { storeToRefs } from "pinia";
const homeStore = useHomeStore();
const { categories } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
.category-vue {
    margin: 4vw 0;

    ul {
        display: flex;
        overflow: auto;
        align-items: center;

        &::-webkit-scrollbar {
            display: none;
        }

        li {
            flex-shrink: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            margin: 0 3.5vw;

            .picture {
                width: 10vw;
            }

            .title {
                margin-top: 1vw;
                font-size: 3vw;
            }
        }
    }
}
</style>
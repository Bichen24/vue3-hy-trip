<template>
    <div class="favor" ref="favorRef">
        <h2>favor</h2>
        <div v-for="item in 100">{{ item }}</div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import useScroll from "@/hooks/useScroll.js";
const favorRef = ref()
console.log(favorRef.value);
const { scrollTop } = useScroll(favorRef)
</script>

<style lang="less" scoped>
.favor {
    height: 300px;
    background-color: orange;
    overflow-y: auto;
}
</style>
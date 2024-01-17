<template>
    <div class="loading" v-if="mainStore.isLoading" @click="mainStore.isLoading = false">
        <h2>loading</h2>
    </div>
</template>

<script setup>
import useMianStore from "@/stores/modules/main";
const mainStore = useMianStore()
</script>
<style lang="less" scoped>
.loading {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .2);
}
</style>
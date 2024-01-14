<template>
   <div class="app">
      <tab-bar v-if="!route.meta.hideTabBar"></tab-bar>
      <router-view></router-view>
      <!-- 在route中设置meta值来进行条件判断，
         有这个值就返回true，
         没有就返回undefined取反就是true； -->
      <!-- <tab-bar></tab-bar> -->
   </div>
</template>
<script setup>
import TabBar from "@/components/tab-bar/tab-bar.vue"
import { useRoute } from "vue-router";
const route = useRoute();
</script>


<style scoped></style>

<template>
    <div class="home">
        <HomeNavBar></HomeNavBar>
        <div class="banner">
            <img src="@\assets\img\home\banner.webp" alt="">
        </div>
        <div class="location">
            <div class="city">广州</div>
            <div class="position">
                <span>我的位置</span>
                <img src="@\assets\img\home\icon_location.png">
            </div>
        </div>
    </div>
</template>

<script setup>
// import { ref } from "vue";
import HomeNavBar from "./copns/home-nav-bar.vue";

</script>

<style lang="less" scoped>
.banner {
    img {
        width: 100%;
    }
}

.location {
    display: flex;
    // justify-content: center;
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
</style>
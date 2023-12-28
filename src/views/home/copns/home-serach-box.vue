<template>
    <div class="home-search-box">
        <div class="location">
            <div class="city">广州</div>
            <div class="position" @click="positionClick">
                <span>我的位置</span>
                <img src="@\assets\img\home\icon_location.png">
            </div>
        </div>
    </div>
</template>

<script setup>
const positionClick = () => {
    navigator.geolocation.getCurrentPosition(res => {
        console.log("成功", res);
    }, err => {
        logger.error(err)
    });
}
</script>

<style lang="less" scoped>
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
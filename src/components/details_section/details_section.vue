<template>
    <div class="details-seaction">
        <h2 class="title">{{ titleText }}</h2>
        <div class="content">
            <slot>
                我是默认内容
            </slot>
        </div>
        <h4 class="more" v-if="More.length">{{ More }} <van-icon name="arrow" /></h4>
    </div>
</template>

<script setup>
defineProps({

    titleText: {
        type: String,
        default: "我是默认标题"
    },
    More: {
        type: String,
        default: ""
    }
})
</script>

<style lang="less" scoped>
.details-seaction {
    border-top: solid 5px rgb(224, 224, 224);

    .title {
        padding: 3vw 0;
        text-indent: .5em;
        border-bottom: solid 1px rgb(224, 224, 224)
    }

    .content {
        margin: 5vw 0;
    }

    .more {
        display: flex;
        justify-content: right;
        margin-right: 2.5vw;
        color: var(--primary-color);
    }
}
</style>
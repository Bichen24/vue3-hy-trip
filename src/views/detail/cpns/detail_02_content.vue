<template>
    <div class="content">
        <h2>{{ contentData.houseName }}</h2>
        <ul class="tags">
            <template v-for="(item, index) in contentData.houseTags">
                <li class="tag-item" v-if="item.tagText" :key="item" :style="{
                    color: item.tagText.color, background: item.tagText.background.color
                }">{{ item.tagText.text }}
                </li>
            </template>
        </ul>
        <div class="comment extra">
            <div class="left">
                <span class="score">{{ contentData.commentBrief.overall }}</span>
                <span class="title">{{ contentData.commentBrief.scoreTitle }}</span>
                <span class="brief">{{ contentData.commentBrief.commentBrief }}</span>
            </div>
            <div class="right">
                <span class="count">
                    {{ contentData.commentBrief.totalCount }}条评论
                    <van-icon name="arrow" />
                </span>
            </div>
        </div>
        <div class="position extra">
            <span class="adress">{{ contentData.nearByPosition.address }}</span>
            <div class="right">
                地图·周边
                <van-icon name="arrow" />
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    contentData: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style lang="less" scoped>
.content {
    .tags {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        .tag-item {
            height: 1.5em;
            line-height: 1.5em;
            padding: 1vw;
            margin: .5vw;
        }
    }
}

.extra {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    margin: 12px 0;
    border-radius: 5px;
    font-size: 12px;
    background-color: #f5f7fa;

    .right {
        color: #ff9645;
    }
}

.comment {
    .score {
        font-size: 18px;
        font-weight: 700;
        color: #333;
    }

    .title {
        color: #333;
        font-weight: 700;
        margin: 0 3px;
    }

    .brief {
        color: #666;
    }
}
</style>
<template>
    <div class="facility">
        <detailsSection titleText="房屋详情" More="查看全部设施">
            <div>
                <template v-for="(group, index) in facilityData.facilitySort" :key="group">
                    <ul>
                        <template v-for="(item, index) in facilityData.houseFacilitys" :key="item">
                            <li v-if="item.groupId === group">
                                {{ item.groupName }}
                                <template v-for="(item, index)  in item.facilitys">
                                    <span v-if="index <= 3">{{ item.name }}</span>
                                </template>
                            </li>
                        </template>
                    </ul>
                </template>
            </div>
        </detailsSection>
    </div>
</template>

<script setup>
import detailsSection from "@/components/details_section/details_section.vue";

defineProps({
    facilityData: {
        type: Object,
        default: () => ({})
    },
})
</script>

<style lang="less" scoped>
.facility {
    height: 100vw;
}
</style>
<template>
    <div class="facility">
        <detailsSection titleText="房东介绍" More="查看评价">
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
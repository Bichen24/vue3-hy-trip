<template>
  <div class="map">
    <detailsSection titleText="price" More="其他">
      <div id="map"></div>
    </detailsSection>
  </div>
</template>

<script setup>
import detailsSection from "@/components/details_section/details_section.vue";
// var map = new BMapGL.Map("map");          // 创建地图实例
// var point = new BMapGL.Point(116.404, 39.915);  // 创建点坐标
// map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
</script>

<style lang="less" scoped>
#map {
  width: 100vw;
  height: 300px;
}
</style>

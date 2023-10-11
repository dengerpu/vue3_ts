<template>
  <div :style="fontstyle">
    <div class='rate' @mouseout="mouseOut">
      <span @mouseover="mouseOver(num)" v-for='num in 5' :key="num">☆</span>
      <span class='hollow' :style="fontwidth">
      <span @mouseover="mouseOver(num)" v-for='num in 5' :key="num">★</span>
    </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, defineProps } from 'vue'
const props = defineProps(['value'])
// 评分宽度
const width = ref(props.value)
function mouseOver (i: number) {
  width.value = i
}
function mouseOut () {
  width.value = props.value
}
const fontwidth = computed(() => `width:${width.value}em;`)
</script>
<style scoped>
.rate{
  position:relative;
  display: inline-block;
}
.rate > span.hollow {
  position:absolute;
  display: inline-block;
  top:0;
  left:0;
  width:0;
  overflow:hidden;
}
</style>

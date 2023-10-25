<template>
  <h1>{{store.count}}</h1>
  <button @click="add">点击加加</button>
</template>
<script setup lang="ts">
import { useCounterStore } from '../store/count'
const store = useCounterStore()
function add () {
  store.add()
}

</script>
<style lang="scss" scoped>

</style>

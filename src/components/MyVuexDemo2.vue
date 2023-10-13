<template>
  <div>
    <h1>{{count}}</h1>
    <button @click="add">点击加加</button>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from '../store/myVuex'
const store = useStore()
const count = computed(() => store.state.count)
function add () {
  store.commit('add')
}
</script>

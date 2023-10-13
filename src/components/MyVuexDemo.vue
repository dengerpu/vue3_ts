<template>
  <div>
    <h1>{{count}}</h1>
    <div>{{ count }} *2 = {{ double }}</div>
    <button @click="add">点击加加</button>
    <button @click="asyncAdd">异步加加</button>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from '../store/myVuex'
const store = useStore()
const count = computed(() => store.state.count)
const double = computed(() => store.getters.double)
function add () {
  store.commit('add')
}
function asyncAdd () {
  store.dispatch('asyncAdd')
}
</script>

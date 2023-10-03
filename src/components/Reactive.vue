<template>
    <div>
        {{ proxy.name }}
        <br/>
        {{ proxy.car.name }}
        <br/>
        <button @click="update">点我++</button>
    </div>
  </template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'ReactiveV',
  setup () {
    const proxy = reactive({
      name: '张三',
      car: {
        name: '奔驰',
        color: 'red'
      }
    })
    function update () {
      proxy.name += '=='
      proxy.car.name += '=='
    }
    return {
      proxy,
      update
    }
  }
})
</script>

<style lang="scss" scoped>
</style>

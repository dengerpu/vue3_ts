<template>
  <div>
    <h2>自定义hook函数操作</h2>
    <h2>x:{{ x }},y:{{ y }}</h2>
  </div>
</template>

<script lang="ts">
import UsePoint from '../hooks/UsePoint'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HookDemo',
  setup () {
    const { x, y } = UsePoint()
    return {
      x,
      y
    }
  }
})
</script>

<style lang="scss" scoped>
</style>

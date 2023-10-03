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
    /*
    reactive
        作用: 定义多个数据的响应式
        const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
        响应式转换是“深层的”：会影响对象内部所有嵌套的属性
        内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的
    */
    const obj = {
      name: '张三',
      car: {
        name: '奔驰',
        color: 'red'
      }
    }
    const proxy = reactive(obj)
    function update () {
      proxy.name += '=='
      proxy.car.name += '=='
    }
    //  总结: 如果操作代理对象,目标对象中的数据也会随之变化,
    // 同时如果想要在操作数据的时候,界面也要跟着重新更新渲染,那么也是操作代理对象
    return {
      proxy,
      update
    }
  }
})
</script>

<style lang="scss" scoped>
</style>

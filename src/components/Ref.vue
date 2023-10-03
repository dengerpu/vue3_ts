<template>
    <div>
      {{ count }}
      <br/>
      {{ obj.name }}
      <br/>
      {{ obj.car.name }}
      <br/>
      <button @click="update">点我++</button>
    </div>
  </template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'RefV',
  setup () {
    // ref是一个函数,作用:定义一个响应式的数据,返回的是一个Ref对象,对象中有一个value属性,如果需要对数据进行操作,
    // 需要使用该Ref对象调用value属性的方式进行数据的操作
    const count = ref(1)
    const obj = ref({
      name: '张三',
      car: {
        name: '奔驰',
        color: 'red'
      }
    })
    console.log(count) // 对象
    console.log(obj) // RefImpl对象
    console.log(obj.value.car) // Proxy(Object)对象
    function update () {
      count.value++
      obj.value.name += '=='
      obj.value.car.name += '=='
    }
    return {
      count,
      update,
      obj
    }
  }
})
</script>

  <style lang="scss" scoped>
  </style>

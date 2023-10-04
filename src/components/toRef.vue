<template>
  <div class="">
    字母: {{ str }}
    <!-- 数量: {{ number.count }}<br/> -->
    <button @click="update">点击更新</button>
  </div>
</template>
<script lang="ts">
import { reactive, defineComponent, toRefs } from 'vue'
export default defineComponent({
  name: 'ToRef',
  /*
    toRefs:
      将响应式对象中所有属性包装为ref对象, 并返回包含这些ref对象的普通对象
      应用: 当从合成函数返回响应式对象时，toRefs 非常有用，
            这样消费组件就可以在不丢失响应式的情况下对返回的对象进行分解使用
  */
  setup () {
    const state = reactive({
      str: 'abc',
      number: {
        count: 0
      }
    })
    const stateRef = toRefs(state)

    function update () {
      state.str += '==' // 使用扩展运算符导出去，这个不会更新
      state.number.count++ // 这个会更新
    }
    const { str } = stateRef
    // 定时器,更新数据,(如果数据变化了,界面也会随之变化,肯定是响应式的数据)
    // setInterval(() => {
    //   str.value += '++++'
    //   console.log('======')
    // }, 1000)
    return {
      // ...state, // 取出的值变为非响应式了
      str,
      // ...stateRef,
      update
    }
  }
})

</script>

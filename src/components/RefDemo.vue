<template>
  <h2>ref的另一个作用:可以获取页面中的元素</h2>
  <input type="text">---
  <input type="text" ref="inputRef">
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
/*
  ref获取元素: 利用ref函数获取组件中的标签元素
  功能需求: 让输入框自动获取焦点
*/
export default defineComponent({
  name: 'RefDemo',
  setup () {
    const inputRef = ref<HTMLElement | null>(null)
    onMounted(() => {
      inputRef.value && inputRef.value.focus()
    })
    return {
      inputRef
    }
  }
})
</script>

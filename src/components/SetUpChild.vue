<template>
    <h2>Child子级组件</h2>
  <h3>msg:{{ msg }}</h3>
  <!-- <h3>count:{{ count }}</h3> -->
  <button @click="emitXxx">分发事件</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SetUpChild',
  props: ['msg'],
  emits: ['hello'],
  setup (props, ctx) {
    // props参数,是一个对象,里面有父级组件向子级组件传递的数据,并且是在子级组件中使用props接收到的所有的属性
    // 包含props配置声明且传入了的所有属性的对象
    console.log('props', props)
    // context参数,是一个对象,里面有attrs对象(获取当前组件标签上的所有的属性的对象,但是该属性是在props中没有声明接收的所有的尚需经的对象),emit方法(分发事件的),slots对象(插槽)
    // 包含没有在props配置中声明的属性的对象, 相当于 this.$attrs
    console.log(ctx)
    console.log(ctx.attrs.msg2)

    // 按钮的点击事件的回调函数
    function emitXxx () {
      // context.emit('xxx','++')
      ctx.emit('hello', '++')
    }

    return {
      emitXxx
    }
  }
})
</script>

  <style lang="scss" scoped>
</style>

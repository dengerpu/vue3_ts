<template>
  <h1>parent, msg: {{msg}}</h1>
  <set-up-child :msg="msg" @hello="xxx" msg2="我是msg2, props里面没有，会通过attrs"></set-up-child>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SetUpChild from './SetUpChild.vue'

export default defineComponent({
  components: { SetUpChild },
  name: 'SetUpParent',
  setup () {
    const msg = ref('我是父组件的信息')
    function xxx (val: string) {
      msg.value += val
    }
    return {
      msg,
      xxx
    }
  }
})
</script>

<style lang="scss" scoped>
</style>

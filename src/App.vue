<template>
  <!-- <HelloWorld/> -->
  <!-- <set-up></set-up> -->
  <!-- <set-up-life></set-up-life> -->
  <!-- <SetUpParent></SetUpParent> -->
  <!-- <ref></ref> -->
  <!-- <reactive></reactive> -->
  <!-- <computed></computed> -->
  <!-- <hook-demo></hook-demo> -->
  <!-- <hook-demo2></hook-demo2> -->
  <to-ref></to-ref>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Reactive from './components/Reactive.vue'
import Ref from './components/Ref.vue'
import SetUp from './components/SetUp.vue'
import SetUpLife from './components/SetUpLife.vue'
import SetUpParent from './components/SetUpParent.vue'
import Computed from './components/Computed.vue'
import HookDemo from './components/HookDemo.vue'
import HookDemo2 from './components/HookDemo2.vue'
import ToRef from './components/toRef.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    SetUp,
    SetUpLife,
    SetUpParent,
    Ref,
    Reactive,
    Computed,
    HookDemo,
    HookDemo2,
    ToRef
}
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <!-- <HelloWorld/> -->
  <!-- <set-up></set-up> -->
  <!-- <set-up-life></set-up-life> -->
  <SetUpParent></SetUpParent>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import SetUp from './components/SetUp.vue'
import SetUpLife from './components/SetUpLife.vue'
import SetUpParent from './components/SetUpParent.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    SetUp,
    SetUpLife,
    SetUpParent
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

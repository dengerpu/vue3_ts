<template>
    <div>
        <h1>个人信息</h1>
        <h2>姓名：{{name}}</h2>
        <h2>年龄：{{age}}</h2>
        <h2>{{msg}}</h2>
        <button @click="sayHello">点击使用vue3中setup中的方法</button><br/>
        <button @click="sayTest">点击使用vue2中methods中的方法</button><br/>
        <button @click="test1">vue2定义中可以访问到vue3的数据和方法</button><br/>
        <button @click="test2">vue3定义中可以访问不到vue2的数据和方法</button><br/>
      </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SetUp',
  data () {
    return {
      msg: '我是vue2data里面的数据'
    }
  },
  methods: {
    sayTest () {
      alert('vue2中的方法')
    },
    test1 () {
      console.log(this.msg)
      console.log(this.name)
      console.log(this.age)
      console.log(this.sayHello)
    }
  },
  setup () {
    // 数据
    const name = '张三'
    const age = 18

    // 方法
    function sayHello () {
      alert(`我是vue3中的方法，我是${name},年龄：${age}`)
    }
    function test2 () {
      console.log(name)
      console.log(age)
      console.log(sayHello)
      // console.log(this.msg) ts会报错
      // console.log(this.sayTest)
    }

    // 返回一个对象（常用）
    return {
      name,
      age,
      sayHello,
      test2
    }

    // 返回一个函数（渲染函数）
    // return () => {
    //   return h('h1',"我是渲染函数，我会替换网页的全部内容，重新渲染")
    // }
  }
})
</script>
<style lang="scss" scoped>
</style>

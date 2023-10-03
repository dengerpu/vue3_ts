<template>
  <div>
    <h2>计算属性和监视</h2>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏:<input
      type="text"
      placeholder="请输入姓氏"
      v-model="user.firstName"
    /><br />
    名字:<input
      type="text"
      placeholder="请输入名字"
      v-model="user.lastName"
    /><br />
  </fieldset>
  <fieldset>
    <legend>计算属性和监视的演示</legend>
    姓名:<input type="text" placeholder="显示姓名" v-model="fullName1" /><br />
    姓名:<input type="text" placeholder="显示姓名" v-model="fullName2" /><br />
    姓名:<input type="text" placeholder="显示姓名" v-model="fullName3" /><br />
  </fieldset>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, computed, ref, watch, watchEffect } from 'vue'
export default defineComponent({
  setup () {
    const user = reactive({
      firstName: '张',
      lastName: '三'
    })
    // 返回的是一个Ref属性
    // const fullName1 = computed(() => {
    //   return user.firstName  + '-' +  user.lastName
    // })
    const fullName1 = computed({
      get () {
        return user.firstName + '-' + user.lastName
      },
      set (val: string) {
        const names = val.split('-')
        user.firstName = names[0]
        user.lastName = names[1]
      }
    })
    // 监视----监视指定的数据
    // immediate 默认会执行一次watch,deep 深度监视
    const fullName2 = ref('')
    // watch(user,
    //   ({ firstName, lastName }) => {
    //     fullName2.value = firstName + '-' + lastName
    //   },
    //   { immediate: true, deep: true }
    // )

    // 监视,不需要配置immediate,本身默认就会进行监视,(默认执行一次)
    const fullName3 = ref('1_3')
    // watchEffect(() => {
    //   fullName3.value = user.firstName + '-' + user.lastName
    // })
    // 监视fullName3的数据,改变firstName和lastName
    watchEffect(() => {
      const names = fullName3.value.split('_')
      user.firstName = names[0]
      user.lastName = names[1]
    })

    // watch---可以监视多个数据的
    watch([user.firstName, user.lastName, fullName3], () => {
      // 这里的代码就没有执行,fullName3是响应式的数据,但是,user.firstName,user.lastName不是响应式的数据
      console.log('====')
    })
    // 当我们使用watch监视非响应式的数据的时候,代码需要改一下
    watch([() => user.firstName, () => user.lastName, fullName3], () => {
      // 这里的代码就没有执行,fullName3是响应式的数据,但是,user.firstName,user.lastName不是响应式的数据
      console.log('123====')
    })

    return {
      user,
      fullName1,
      fullName2,
      fullName3
    }
  }
})
</script>
<style lang="scss" scoped>
</style>

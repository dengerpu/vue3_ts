import { inject, reactive, computed } from 'vue'

// 规定了提供全局数据的key, provide和inject使用
const STORE_KEY = '__store__'

function useStore () {
  // 任意子组件中获取provide提供的数据
  return inject(STORE_KEY)
  // return inject(STORE_KEY) 这里在子组件调用useStore时，通过STORE_KEY拿到key对应的value
}
/**
 * 作用是实例化Store对象，把用户写的vuex的几个属性（state，actions，
    mutations，getters）传给Store对象
 * @param {*} options
 * @returns Store
 */
function createStore (options) {
  return new Store(options)
}

class Store {
  constructor (options) {
    this.$options = options
    // 用户传入的state对象变成响应式数据，并保存到内部变量_state上面
    this._state = reactive({
      data: options.state()
    })
    // 直接保存用户的mutations
    this._mutations = options.mutations
    this._actions = options.actions
    this.getters = {}

    Object.keys(options.getters).forEach(name => {
      const fn = options.getters[name]
      this.getters[name] = computed(() => fn(this.state))
    })
  }

  //  state方法返回保存在_state上面的用户的state, 使用get state(){}格式，
  // 是为了访问this.state时直接拿到返回值，而不是this.state() 才能拿到返回值
  get state () {
    return this._state.data
  }

  /**
   * commit方法是在用户调用commit时一般会传入要触发的mutions函数名称，和新数据
      commit函数在接收到用户传入的参数时，先判断了_mutations对象上面有用户要触发的函
      数，之后进行触发，传入state，和新数据提供给用户的mutations函数使用
   * @param {*} type
   * @param {*} payload
   */
  commit = (type, payload) => {
    const entry = this._mutations[type]
    entry && entry(this.state, payload)
  }

  dispatch (type, payload) {
    const entry = this._actions[type]
    return entry && entry(this, payload)
  }

  /**
   * 在Vue.use(store)时，会执行install函数，这时调用了app上面的provide，此时全局最顶层的ap
    p组件会提供一个key为STORE_KEY（__store__）的对象，值为this（Store对象）供任意子组
    件通过inject去获取顶层组件提供的store数据
   * @param {*} app
   */
  install (app) {
    // 全局提供数据
    app.provide(STORE_KEY, this)
  }
}

export { createStore, useStore }

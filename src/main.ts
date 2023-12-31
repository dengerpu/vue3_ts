import { createApp } from 'vue'
import App from './App.vue'
// @ts-ignore
import store from './store/index.js'
// @ts-ignore
import router from './router/index.js'

import { createPinia } from 'pinia'
const pinia = createPinia()


const app = createApp(App)

window.onerror = function (e) {
  console.log(['https://stackoverflow.com/search?q=[js]+' + e])
}

app.use(store)
app.use(router)
app.use(pinia)

app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
//@ts-ignore
import store from './store/index.js'
//@ts-ignore
import router from './router/index.js'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')

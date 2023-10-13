import { createApp } from 'vue'
import App from './App.vue'
//@ts-ignore
import store from './store/index.js'

const app = createApp(App)

app.use(store)

app.mount('#app')

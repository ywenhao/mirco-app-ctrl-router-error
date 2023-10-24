import './assets/main.css'

import microApp from '@micro-zoe/micro-app'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

microApp.start()

const app = createApp(App)
app.use(router)

app.mount('#app')

// 打开新窗口后，这里会加载很多遍
console.log('主应用 main.ts')

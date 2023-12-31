import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

const app = createApp(App)
app.use(router)

app.mount('#app')

// @ts-ignore
window.mount = () => {
  console.log('child mount')
}

// @ts-ignore
window.unmount = () => {
  app.unmount()
  console.log('child unmount')
}

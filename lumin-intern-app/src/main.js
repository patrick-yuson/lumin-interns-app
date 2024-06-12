import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia() // Create the Pinia instance

app.use(pinia) // Use the Pinia instance
app.use(router)

app.mount('#app')

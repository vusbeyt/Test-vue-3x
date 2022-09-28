import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Navbar from './views/Navbar.vue'

import './assets/main.css'
import './assets/scss/logo.scss'
import './assets/scss/blocks.scss'
import './assets/scss/vectors.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')

app.component("Navbar", Navbar);
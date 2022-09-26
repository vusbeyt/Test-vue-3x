import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Logo from './views/logo.vue'
import Navbar from './views/Navbar.vue'

import './assets/main.css'
import './assets/scss/logo.scss'
import './assets/scss/blocks.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')

app.component("Logo", Logo);
app.component("Navbar", Navbar);
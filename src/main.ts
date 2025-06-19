import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import i18n from './utils/i18n';
import {initLanguage} from "@/utils/i18n-switcher.ts";



const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

initLanguage()
app.mount('#app')

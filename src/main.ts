import './app/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app/App.vue'
import router from './app/router'

import i18n from './shared/i18n';
import {initLanguage} from "@/shared/i18n/i18n-switcher.ts";



const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

initLanguage()
app.mount('#app')

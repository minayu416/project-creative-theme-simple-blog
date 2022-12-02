import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import message from './locales.json'

import './assets/main.css'

const i18n = createI18n({
    locale: 'en',
    allowComposition: true, // you need to specify that!
    messages: message
  })


createApp(App).use(router).use(i18n).mount('#app')


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Carousel3d from 'vue-carousel-3d'

import '@/style/main.scss'
import '@/style/reset.css'

createApp(App).use(store).use(router).use(Carousel3d).mount('#app')

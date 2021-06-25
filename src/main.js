import { createApp } from 'vue'
import './assets/index.css'
import App from './App.vue'
import router from './router'
import store from '@/store';
store.init();

createApp(App)
    .provide('store', store)
    .use(router)
    .mount('#app');

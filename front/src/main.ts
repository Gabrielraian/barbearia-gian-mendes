import 'primevue/resources/themes/lara-light-green/theme.css';
import { createApp } from 'vue'
import router from './router'
import vuex from './vuex/vuex'
import { createPinia } from 'pinia';
import ToastService from 'primevue/toastservice';
import PrimeVue from 'primevue/config';
import Toast from 'primevue/toast';
import App from './App.vue'

const app = createApp(App);
app.use(PrimeVue, { ripple: true });
app.use(ToastService);
app.use(createPinia());
app.use(vuex);
app.use(router);
app.component('Toast', Toast);
app.mount('#app');
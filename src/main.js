import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js';
import storeNormal from './vuex/storeNormal.js';

// createApp(App).app.use(store).use(router).mount('#app');       // Importa el orden

// Equivalente

// createApp(App)
//   .use(router)
//   .mount('#app');


const app = createApp(App);
app.use(storeNormal);
app.use(router);
app.mount('#app');
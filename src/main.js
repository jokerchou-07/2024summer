import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 確保路徑正確
import "./index.css";

const app = createApp(App)
app.use(router)
app.mount('#app')

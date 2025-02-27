import { createApp } from 'vue'
import App from './App.vue'

// Import BootstrapVue 3
import BootstrapVue3 from 'bootstrap-vue-3'

// Import Bootstrap CSS and Bootstrap Icons
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'bootstrap-icons/font/bootstrap-icons.css';


import '@/assets/fonts/fonts.css';
import "@/styles/global.scss";



const app = createApp(App)
app.use(BootstrapVue3)
app.mount('#app')

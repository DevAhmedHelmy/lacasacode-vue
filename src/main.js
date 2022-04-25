import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Errors from './components/errors'
import axios from 'axios'
const axiosInstance = axios.create();
axiosInstance.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axiosInstance.defaults.baseURL = `http://127.0.0.1:8000/api/`;
let token = localStorage.getItem('token');
axiosInstance.defaults.headers.common["Authorization"]= token ? `Bearer ${token}` : ''


 
const app = createApp(App)
app.component('errors',Errors);
app.use(router);
app.config.globalProperties.$axios = { ...axiosInstance }
app.mount('#app');
 

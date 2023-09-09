import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './router';

const app = createApp(App); // สร้างแอพพลิเคชันและเก็บไว้ในตัวแปร "app"


app.use(router) // Use the router
app.mount('#app'); // เรียกใช้แอพพลิเคชัน

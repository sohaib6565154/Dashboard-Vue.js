import { createApp } from 'vue'
import App from './App.vue'
import '@/assests/main.css'
import HighchartsVue from "highcharts-vue";

createApp(App).use(HighchartsVue).mount("#app");

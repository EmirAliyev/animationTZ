import { createApp } from 'vue'
import './assets/style/main.sass'
import App from './App.vue'
import VCard from './directives/VCard '
const app = createApp(App)
app.directive('card',VCard)

app.mount('#app')

import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import './styles/index.css'

library.add(fas)
const app = createApp(App)
app.mount('#app')

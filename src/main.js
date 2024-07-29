import './assets/main.css'

import { createApp } from 'vue'
import App from '@/components/app/App.vue'
import router from './router'
import uiComp   from '@/ui-components'
const app = createApp(App)
uiComp.map(component => app.component(component.name, component))
app.use(router)
app.mount('#app')

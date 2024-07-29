import './assets/main.css'

import { createApp } from 'vue'
import App from '@/components/app/App.vue'
import router from './router'

import uiComponents from './ui-components'
// import AppBar from '@mui/material/AppBar'
// import Toolbar from '@mui/material/Toolbar'
// import Typography from '@mui/material/Typography'

const app = createApp(App)
uiComponents.map(component => app.component(component.name, component))
app.use(router)
app.mount('#app')

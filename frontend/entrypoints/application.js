// To see this message, follow the instructions for your Ruby framework.
//
// When using a plain API, perhaps it's better to generate an HTML entrypoint
// and link to the scripts and stylesheets, and let Vite transform it.
console.log('Vite ⚡️ Ruby')

import { createApp } from 'vue'
import App from '@/vue_frontend/reaction-timer/src/App.vue'


const app = createApp(App)
app.mount('#vue-app')

// Example: Import a stylesheet in <sourceCodeDir>/index.css
// import '~/index.css'

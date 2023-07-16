import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import route from "./router"
import 'vuetify/dist/vuetify.min.css';

loadFonts()

const app = createApp(App)
app.use(vuetify)
app.use(route)
app.mount('#app')

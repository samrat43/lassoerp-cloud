import { createApp } from 'vue'
import App from './App.vue'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import './registerServiceWorker'
import router from './router'
import store from './store'

// loads the Icon plugin
UIkit.use(Icons);

createApp(App).use(store).use(router).mount('#app')

import { createApp, watch } from 'vue'
import App from './App.vue'
import router from '../src/router'
import { createPinia } from "pinia";

const app = createApp(App)

const pinia = createPinia()

if (localStorage.getItem("state")) {
    pinia.state.value = JSON.parse(localStorage.getItem("state"));
}
watch(
    pinia.state,
    (state) => {
        localStorage.setItem("state", JSON.stringify(state))
    },
    {deep:true}

)

app.use(pinia)

app.use(router)



app.mount('#app')

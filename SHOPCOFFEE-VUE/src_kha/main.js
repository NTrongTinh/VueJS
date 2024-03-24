import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <---
import { createStore } from "vuex"; // Thay vì import Vuex từ 'vue', hãy import từ 'vuex'
import storeConfig from './store';

const store = createStore(storeConfig); // Sử dụng createStore để tạo store
window.scrollTo(0, 0);
createApp(App).use(router).use(store).mount('#app'); // Sử dụng store với use(store)


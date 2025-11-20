// import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';

// 생성한 라우터를 등록
import router from './router';

// 생성한 라우터 인스턴스를 app 컴포넌트에 등록
const app = createApp(App);
app.use(router);
app.mount('#app');

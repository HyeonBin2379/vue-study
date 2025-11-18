import { createApp } from 'vue';
import App from './App.vue';

// 컴포넌트 전역 등록
// import FirstChild from './components/FirstChild.vue';
import SecondChild from './components/SecondChild.vue';

// index.html을 App.vue의 지정한 영역과 바인딩
const app = createApp(App);

// App,vue에 컴포넌트 FirstChild를 등록 후 마운트
// app.component('FirstChild', FirstChild);
app.component('SecondChild', SecondChild);
app.mount('#app');

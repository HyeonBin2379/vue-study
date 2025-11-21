import { createApp } from 'vue';
import App from './App.vue';

// /router/index.js 파일에 추가된 라우터들을 import
import router from './router';

// 기본 부트스트랩 적용
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// index.html 파일에서 id가 app인 <div>에서 사용할 메인 컴포넌트 생성
const app = createApp(App);

// router 관련 기능을 전역적으로 사용하기 위해 Vue Router 플러그인을 애플리케이션에 등록 -
// 이로 인해 개별 컴포넌트 파일마다 RouterView를 수동으로 import할 필요 없음.
app.use(router);
app.mount('#app');

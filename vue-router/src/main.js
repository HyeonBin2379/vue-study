import { createApp } from "vue";
import App from "./App.vue";

// /router/index.js 파일에 추가된 라우터들을 import
import router from "./router";

// 기본 부트스트랩 적용
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App);

// Vue Router 플러그인을 애플리케이션에 등록 - router 관련 기능들을 전역적으로 사용 가능
// App.vue에서는 vue-router가 제공하는 라우터 관련 컴포넌트들도 자동 등록되어 사용됨
app.use(router);

app.mount("#app");

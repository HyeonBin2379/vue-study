// 라우터 생성 코드는 일반적으로 /router/index.js 파일에 작성하는 것을 권고
// 기능적인 측면에서의 라우팅
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

// 라우터 구성 객체 생성 및 등록: history, routes 속성값을 설정한 객체를 인자로 전달
const _router = createRouter({
  history: createWebHistory(),
  routes: [
    // 정적 임포트(static import) 방식
    // 당장 화면에 렌더링해야 할 경로가 아니어도 app 시작 시점부터 컴포넌트를 메모리에 로드
    // 주로 루트 경로에 해당하는 컴포넌트에만 정적 임포트 사용
    {
      path: '',
      name: 'home',
      component: HomeView,
    },
    // 동적 임포트(dynamic import) 방식:
    // 필요한 순간에만 로드
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

// 생성한 라우터는 main.js에 연결 필수

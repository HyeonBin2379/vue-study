// 라우터 생성 코드는 일반적으로 /router/index.js 파일에 작성하는 것을 권고
// 기능적인 측면에서의 라우팅
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

// 라우터 구성 객체 생성 및 등록: history, routes 속성값을 설정한 객체를 인자로 전달
const router = createRouter({
  // Vue에서 제공하는 기본 url을 탐색하도록 설정
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    // 정적 임포트(static import) 방식
    // 당장 화면에 렌더링해야 할 경로가 아니어도 app 시작 시점부터 컴포넌트를 메모리에 로드
    // 주로 루트 경로에 해당하는 컴포넌트에만 정적 임포트 사용
    {
      path: '',
      name: 'home',
      component: HomeView,
    },
    // 동적 임포트(dynamic import) 방식
    // 필요한 순간에만 로드
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },

    // 모든 사용자를 일일이 등록하는 것은 매우 비효율적 -> 동적 세그먼트를 사용한 경로 매칭 수행
    // 동적 경로 매칭 사용 예시
    {
      path: '/user/info',
      name: 'userInfo',
      component: () => import('../views/UserInfo.vue'),
    },

    {
      path: '/user/:id',
      name: 'userView',
      component: () => import('../views/UserViewComposition.vue'),
    },
  ],
});

// 생성한 라우터를 main.js에서 사용할 수 있도록 export
export default router;

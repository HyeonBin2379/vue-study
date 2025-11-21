// 라우터 인스턴스 생성에 필요한 기능 import
import { createRouter, createWebHistory } from 'vue-router';

// 홈페이지 관련 컴포넌트 import
import HomeView from '../views/HomeView.vue';

// router01 관련 컴포넌트 import
import BoardList1 from '@/components/router01/BoardList.vue';
import FileList1 from '@/components/router01/FileList.vue';
import PictureList1 from '@/components/router01/PictureList.vue';

// router01 관련 라우팅 컴포넌트 import

// 라우팅 인스턴스 생성
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 홈페이지 뷰 route 등록
    {
      path: '',
      name: 'main',
      component: HomeView,
    },

    // router01 - 첫번째 드롭다운 메뉴의 서브메뉴 url에 관한 route 모두 등록
    {
      path: '/r01/board',
      component: BoardList1,
    },
    {
      path: '/r01/file',
      component: FileList1,
    },
    {
      path: '/r01/picture',
      component: PictureList1,
    },
  ],
});

// 생성한 라우터 인스턴스를 사용하기 위해 export
export default router;

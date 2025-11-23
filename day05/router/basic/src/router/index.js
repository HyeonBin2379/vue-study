// 라우터 인스턴스 생성에 필요한 기능 import
import { createRouter, createWebHistory } from 'vue-router';

// 홈페이지 관련 컴포넌트 import
import HomeView from '../views/HomeView.vue';
import TheBoardView from '@/views/TheBoardView.vue';

// router01 관련 컴포넌트 import
import BoardList1 from '@/components/router01/BoardList.vue';
import FileList1 from '@/components/router01/FileList.vue';
import PictureList1 from '@/components/router01/PictureList.vue';

// router02 관련 컴포넌트 import
import BoardList2 from '@/components/router02/BoardList.vue';
import BoardDetail2 from '@/components/router02/BoardDetail.vue';

// router03 - 등록한 route의 name 속성 사용
import BoardList3 from '@/components/router03/BoardList.vue';
import BoardDetail3 from '@/components/router03/BoardDetail.vue';

// router04 - router.push() 사용
import BoardList4 from '@/components/router04/BoardList.vue';
import BoardDetail4 from '@/components/router04/BoardDetail.vue';

// router05
import BoardList5 from '@/components/router05/BoardList.vue';
import BoardDetail5 from '@/components/router05/BoardDetail.vue';
import BoardWrite5 from '@/components/router05/BoardWrite.vue';
import BoardModify5 from '@/components/router05/BoardModify.vue';

// router06
import TheBoardView6 from '@/views/TheBoardView6.vue';
import BoardList6 from '@/components/router06/BoardList.vue';
import BoardDetail6 from '@/components/router06/BoardDetail.vue';

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
    // 라우팅: route 객체를 통해, 링크의 url에 매핑된 뷰 컴포넌트를 렌더링
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

    // router02 - 두번째 드롭다운 메뉴의 서브메뉴(name 속성은 생략 가능)
    // path 속성값을 기준으로 라우팅
    {
      path: '/r02/board',
      component: BoardList2,
    },
    {
      // 게시글 상세보기 기능: 동적 경로 매칭 방식 적용
      // 기본적으로는 path 속성값을 기준으로 라우팅하는 방식
      // 현재 게시글번호를 동적 세그먼트 :no의 파라미터값으로 전달
      path: '/r02/board/:no',
      component: BoardDetail2,
    },

    // router03 - name 속성을 route 객체 탐색(라우팅) 수단으로 사용
    {
      path: '/r03/board',
      name: 'board3',
      component: BoardList3,
    },
    {
      // 게시글 번호로 동적 매핑, route 등록 시 name 속성 사용
      // 찾은 name 속성값에 해당하는 route의 path 속성의 :no 부분에
      // 파라미터로 전달받은 게시글 번호를 연결
      path: '/r03/board/:no',
      name: 'boardview3',
      component: BoardDetail3,
    },

    // router04 - 게시글 번호에 해당하는 게시글로 라우팅 시, 프로그래밍 방식 사용
    {
      path: '/r04/board',
      name: 'board4',
      component: BoardList4,
    },
    {
      // 동적 매핑 사용
      // 프로그래밍 방식을 사용하여 :no에 들어갈 값을 지정
      path: '/r04/board/:no',
      name: 'boardview4',
      component: BoardDetail4,
    },

    // router05 - 중첩 라우팅 방식
    // 중첩된 라우트: 부모 라우트 객체 내부에 포함된 자식 route 객체 -> children 속성을 사용하여 지정
    {
      path: '/r05/board',
      name: 'board5',
      component: TheBoardView,

      // redirect: "/r05/board/list"에 해당하는 route로 리다이렉트
      // redirect 속성을 보유한 route에 관한 요청 발생 시, redirect 속성값에 해당하는 목적지로 경로 재설정
      redirect: {
        // redirect 속성값 = 리다이렉트의 목적지에 해당하는 route
        path: '/r05/board/list',
        // name: 'boardlist5',
      },

      // 라우터에 children 속성을 두어 자식 라우터를 중첩
      children: [
        {
          path: '/r05/board/list',
          name: 'boardlist5',
          component: BoardList5,
        },
        {
          path: 'view/:no',
          name: 'boardview5',
          component: BoardDetail5,
        },
        {
          path: 'write',
          name: 'boardwrite5',
          component: BoardWrite5,
        },
        {
          path: 'modify/:no',
          name: 'boardmodify5',
          component: BoardModify5,
        },
      ],
    },

    //router06 - props 사용
    {
      path: '/r06/board',
      name: 'board6',
      component: TheBoardView6,

      // '/r06/board'에 관한 요청 발생 시 "/r06/board/list"로 리다이렉트
      redirect: { name: 'boardlist6' },
      children: [
        {
          path: 'list',
          name: 'boardlist6',
          component: BoardList6,
        },
        {
          // 동적 경로 지정
          path: 'view/:no',
          name: 'boardview6',
          component: BoardDetail6,
          // route 객체에 props: true 속성 추가 -> route.params로 전달된 값을 props로 설정
          props: true,
        },
      ],
    },
  ],
});

// 생성한 라우터 인스턴스를 사용하기 위해 export
export default router;

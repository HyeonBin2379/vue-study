<script setup>
import { RouterLink, useRouter } from 'vue-router';
import IconHome from '@/components/icons/IconHome.vue';
import IconBoard from '@/components/icons/IconBoard.vue';
import IconPicture from '@/components/icons/IconPicture.vue';
import IconFile from '@/components/icons/IconFile.vue';
import DropDownIconMenuSlot from '@/components/common/DropDownIconMenuSlot.vue';

const router = useRouter();

// 홈 뷰에 관한 히스토리를 추가 -> 뷰를 방문할 때마다 히스토리가 추가됨
function moveMain() {
  // router.replace({ path: "/" }); // 현재 라우트를 대체
  // router.push({ path: "/", replace: true }); // 위와 같음
  router.push({ name: 'main' }); // 새 히스토리 항목을 푸시
}

// 
function moveBoard() {
  router.push('/r04/board');
}
</script>

<template>
  <nav class="navbar navbar-expand-md bg-body-tertiary sticky-top">
    <div class="container-fluid">
      <!-- RouterLink: 링크 클릭 시 홈페이지에 관한 뷰 컴포넌트를 렌더링 -->
      <!-- RouterLink, RouterLink 모두 사용 가능(케밥케이스 사용 여부의 차이) -->
      <RouterLink to="/" class="navbar-brand">
        <img
          src="@/assets/mmcafe.png"
          class="rounded mx-auto d-block"
          id="logo"
          alt="..."
        />
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- 첫번째 드롭다운 메뉴 -->
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-md-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Router 기본
            </a>
            <ul class="dropdown-menu">
              <li>
                <!-- 로고 클릭 시 홈페이지 이동 -->
                <RouterLink to="/" class="dropdown-item">
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconHome></IconHome>
                    </template>
                    <template v-slot:label> Home </template>
                  </DropDownIconMenuSlot>
                </RouterLink>
              </li>
              <li>
                <!-- 클릭 시 /r01/board에 매핑된 뷰 컴포넌트와 연결되는 라우터 링크 설정 -->
                <!-- 클릭 시 router01/BoardList.vue를 렌더링 -->
                <RouterLink to="/r01/board" class="dropdown-item">
                  <!-- 드롭다운 메뉴 슬롯 -> 드롭다운 메뉴 형식은 고정, 사용할 아이콘과 내용만 변경 -->
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconBoard></IconBoard>
                    </template>
                    <template v-slot:label> 자유글 </template>
                  </DropDownIconMenuSlot>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/r01/picture" class="dropdown-item">
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconPicture></IconPicture>
                    </template>
                    <template v-slot:label> 사진자랑 </template>
                  </DropDownIconMenuSlot>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/r01/file" class="dropdown-item">
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconFile></IconFile>
                    </template>
                    <template v-slot:label> 파일공유 </template>
                  </DropDownIconMenuSlot>
                </RouterLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- 첫번째 드롭다운 메뉴 끝-->

      <!-- 두번째 드롭다운 메뉴 -->
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-md-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <!-- 여기서부터 드롭다운 시작 -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              동적경로매칭
            </a>
            <ul class="dropdown-menu">
              <li>
                <!-- RouterLink를 사용하여 컴포넌트로 라우팅 -->
                <RouterLink to="/r02/board" class="dropdown-item">
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconBoard></IconBoard>
                    </template>
                    <template v-slot:label> 자유글 </template>
                  </DropDownIconMenuSlot>
                </RouterLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- 두번째 드롭다운 메뉴 종료 -->

      <!-- 세번째 드롭다운 메뉴 -->
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-md-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              이름이있는라우트
            </a>
            <ul class="dropdown-menu">
              <li>
                <RouterLink :to="{ name: 'main' }" class="dropdown-item">
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconHome></IconHome>
                    </template>
                    <template v-slot:label> Home </template>
                  </DropDownIconMenuSlot>
                </RouterLink>
              </li>
              <li>
                <RouterLink :to="{ name: 'board3' }" class="dropdown-item">
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconBoard></IconBoard>
                    </template>
                    <template v-slot:label> 자유글 </template>
                  </DropDownIconMenuSlot>
                </RouterLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- 세번째 드롭다운 메뉴 종료-->
      
      <!-- 네번째 드롭다운 메뉴: 게시글 번호에 해당하는 게시글로 라우팅 시, 프로그래밍 방식 사용 -->
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-md-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              프로그래밍방식탐색
            </a>
            <ul class="dropdown-menu">
              <!-- 드롭다운 메뉴 클릭 시, 지정한 url에 관한 히스토리를 추가하는 함수를 실행 -->
              <!-- 홈페이지로 이동 -->
              <li>
                <a @click="moveMain()" class="dropdown-item">
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconHome></IconHome>
                    </template>
                    <template v-slot:label> Home </template>
                  </DropDownIconMenuSlot>
                </a>
              </li>
              <!-- 게시글 목록(/r04/board)으로 이동 -->
              <li>
                <a @click="moveBoard()" class="dropdown-item">
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconBoard></IconBoard>
                    </template>
                    <template v-slot:label> 자유글 </template>
                  </DropDownIconMenuSlot>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- 네번째 드롭다운 메뉴 -->
      
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-md-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              중첩된라우트
            </a>
            <ul class="dropdown-menu">
              <li>
                <RouterLink :to="{ name: 'main' }" class="dropdown-item">
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconHome></IconHome>
                    </template>
                    <template v-slot:label> Home </template>
                  </DropDownIconMenuSlot>
                </RouterLink>
              </li>
              <li>
                <RouterLink :to="{ name: 'board5' }" class="dropdown-item">
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconBoard></IconBoard>
                    </template>
                    <template v-slot:label> 자유글 </template>
                  </DropDownIconMenuSlot>
                </RouterLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      
      <!-- <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-md-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              props로 데이터전달
            </a>
            <ul class="dropdown-menu">
              <li>
                <RouterLink :to="{ name: 'main' }" class="dropdown-item">
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconHome></IconHome>
                    </template>
                    <template v-slot:label> Home </template>
                  </DropDownIconMenuSlot>
                </RouterLink>
              </li>
              <li>
                <RouterLink :to="{ name: 'board6' }" class="dropdown-item">
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconBoard></IconBoard>
                    </template>
                    <template v-slot:label> 자유글 </template>
                  </DropDownIconMenuSlot>
                </RouterLink>
              </li>
            </ul>
          </li>
        </ul>
      </div> -->
    </div>
  </nav>
</template>

<style scoped>
#logo {
  width: 9.375rem;
}
</style>

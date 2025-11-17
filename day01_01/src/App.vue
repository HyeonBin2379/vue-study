<script>
export default {
  data() {
    // return {
    //   fruits: ['banana', 'orange', 'apple'],
    // };
    return {
      // gender: 'male',
      // selectItem: 'cafeLatte',
      uid: '',
      upw: '',
    };
  },

  methods: {
    login() {
      console.log(`id: ${this.uid}`);
      console.log(`pwd: ${this.upw}`);
    },
    printData() {
      // console.log(`id: ${this.fruits}`);
      console.log(`id: ${this.uid}`);
      console.log(`id: ${this.upw}`);
    },
  },
};
</script>

<template>
  <form id="loginForm">
    <label for="uid">
      아이디: <input type="text" id="uid" v-model="uid"></input>
    </label>
    {{ uid }}
    <label for="upw">
      비밀번호: <input type="text" id="upw" v-model="upw"></input>
    </label>
    {{ upw }}
    <button type="button" @click="login">로그인</button>

    <!-- 사용자가 textarea에 작성한 데이터를 그대로 자바스크립트 데이터로 출력 -->
    <!-- <textarea v-model="message"></textarea>
    <button type="button" @click="printData">데이터 출력</button> -->

    <!-- v-model에 의해 바인딩되어 value 속성값과 일치하는 값을 체크표시하여 출력하도록 렌더링 -->
    <!-- <label for="banana">
      <input type="checkbox" id="banana" v-model="fruits" value="banana">바나나</input>
    </label>
    <label for="orange">
      <input type="checkbox" id="orange" v-model="fruits" value="orange">오렌지</input>
    </label>
    <label for="apple">
      <input type="checkbox" id="apple" v-model="fruits" value="apple">사과</input>
    </label>
    <button type="button" @click="printData">확인</button>

    <label for="male">
      <input type="radio" id="gender" v-model="gender" value="male">남자</input>
    </label>
    <label for="female">
      <input type="radio" id="gender" v-model="gender" value="female">여자</input>
    </label>
    <button type="button" @click="printData">확인</button> -->

    <!-- 콤보박스의 요소는 사용자가 선택한 option 태그의 value 값이 v-model과 바인딩된 selectItem 속성의 데이터에 자동 업데이트됨 -->
    <!-- 단, 한글 입력의 경우 ime 오류가 발생 -> 영어만 정상적으로 사용 가능하다는 문제가 존재 -->
    <!-- 한글, 한자처럼 글자를 조합해야 하는 문자의 경우 실시간으로는 v-model 사용 불가, 이벤트를 사용한 수동 처리 필요 -->
    <!-- v-model이 바인딩할 대상은 html 태그의 value값 -->
    <!-- <select v-model="selectItem">
      <option value="americano">아메리카노</option>
      <option value="cafeLatte">카페라떼</option>
      <option value="espresso">에스프레소</option>
    </select>

    <button type="button" @click="printData">확인</button> -->
  </form>
</template>

<style></style>

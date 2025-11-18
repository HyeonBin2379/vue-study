<script>
export default {
  data() {
    return {
      firstName: 'Minsu',
      lastName: 'Kim',
      numberArray: [1, 2, 3, 4, 5],
      inputStr: '',
      num: 0,
      arr: [0, 1, 2],
      obj: { name: 'younghe' },
    };
  },

  // computed: 자주 사용되는 데이터 관련 연산을 미리 computed 옵션 속성으로 지정
  computed: {
    // computed의 함수에서 참조한 data 속성은 그 값이 변경되기 전까지 computed에서 캐시됨
    // 즉, data 속성을 바탕으로 만들 형태를 computed에서 미리 지정하고, 이를 template 태그 내부에서 사용하는 방식
    fullName() {
      console.log('computed fullName');
      return `${this.lastName} ${this.firstName}`;
    },

    evenSum() {
      return this.numberArray
        .filter((v) => v % 2 == 0)
        .reduce((acc, cur) => acc + cur, 0);
    },
  },

  // watch: 변경이 발생할 때마다 해당 객체에 관한 변경을 감지하여 특정 동작을 수행
  watch: {
    inputStr(newValue, oldValue) {
      console.log(`old value : ${oldValue}`);
      console.log(`new value : ${newValue}`);
    },
    num(newValue, oldValue) {
      console.log(`old value : ${oldValue}`);
      console.log(`new value : ${newValue}`);
    },
    // 감시할 데이터나 계산된 속성
    arr: {
      // 변경 감지 시 수행할 동작
      handler(newValue, oldValue) {
        console.log(`old value : ${oldValue}`);
        console.log(`new value : ${newValue}`);
      },
      // 감시할 데이터/계산된 속성이 변경될 때마다 콜백함수를 호출할지 여부
      deep: true,
      // 초기 렌더링 시 콜백함수 호출 여부
    },
    obj: {
      handler(newValue, oldValue) {
        console.log(`old value : ${JSON.stringify(oldValue)}`);
        console.log(`new value : ${JSON.stringify(newValue)}`);
      },
      deep: true,
    },
  },
};
</script>

<template>
  <!-- h1 태그로 2회에 걸쳐 firstName, lastName 데이터를 참조 -->
  <h1>{{ lastName }} - {{ firstName }}</h1>
  <h1>{{ firstName }} - {{ lastName }}</h1>

  <!-- computed 속성으로 지정한 연산 역시 data를 출력할 때와 같은 방식으로 사용 -->
  <h1>{{ fullName }}</h1>
  <h1>{{ evenSum }}</h1>
  <input type="text" v-model="inputStr" />

  <h1>{{ arr }}</h1>
  <h1>{{ obj }}</h1>

  <button @click="arr.push(3)">배열값 변경</button>
  <br />
  <button @click="obj.age = '25'">객체값 추가</button>
</template>

<style></style>

<!-- script: 데이터 바인딩 및 이벤트 연결 작업 수행 -->
<script>
export default {
  data() {
    return {
      // 1. 출력칸에서 사용자에게 노출될 값(사용자에게 보여지는 값 -> v-model 지정)
      output: null,
      // 2. 이전에 입력된 숫자값 or 연산 결과 저장
      prev: null,
      // 3. 현재 입력된 숫자값 저장
      cur: null,
      // 4. 마지막으로 입력된 연산자
      operator: null,
      operationActions: {
        // 사칙연산을 수행하는 함수를 각각의 객체로 정의
        '+': (n1, n2) => n1 + n2,
        '-': (n1, n2) => n1 - n2,
        '*': (n1, n2) => n1 * n2,
        '/': (n1, n2) => n1 / n2,
      },
    };
  },

  methods: {
    clear() {
      // 저장된 모든 값 비우기
      this.output = null;
      this.prev = null;
      this.cur = null;
      this.operator = null;
    },

    calculate(n) {
      // 1. 입력된 숫자값이 없음
      if (!this.prev && !this.cur) {
        return;
      }
      // 2. 연산자만 연속 입력
      if (this.operator !== '' && !this.cur) {
        return;
      }
      // 3. 등호로 출력된 결과에 다시 등호 입력
      if (this.operator === '=' && this.prev === this.cur) {
        return;
      }

      // 4-1. 현재 입력값을 정수/실수로 변환
      this.cur = Number(this.cur);

      if (this.operator !== null) {
        // 4-2A. 마지막 연산자 존재 -> 피연산자가 2개 확보되었으므로 사칙연산 진행
        this.prev = this.operationActions[this.operator](this.prev, this.cur);

        if (n === '=') {
          // 4-3A. 현재까지의 누적된 연산 결과 출력 후 종료
          this.operator = null;
          this.output = this.prev;
          this.cur = this.prev; // 현재 연산 결과를 바탕으로 새로운 사칙연산 가능
          return;
        } else {
          // 4-3B. 현재 입력된 연산자를 저장하고 출력창의 현재 숫자값을 초기화
          this.operator = n;
          this.cur = null;
          this.output = null;
        }
      } else {
        // 4-2B. 마지막 연산자 없음(최초의 피연산자)
        this.prev = this.cur; // 현재 값을 직전 숫자값으로 저장

        // 4-3B. 현재 입력된 연산자를 저장하고 출력창의 현재 숫자값을 초기화
        this.operator = n;
        this.cur = null;
        this.output = null;
      }
    },

    userInput(n) {
      this.cur = this.cur === null ? n : (this.cur += n);
      this.output = this.cur;
    },

    operation(event) {
      const n = event.currentTarget.value;

      if (n === 'C') {
        // 계산기 저장내역 초기화
        this.clear();
      } else if (['+', '-', '*', '/', '='].includes(n)) {
        // 연산 처리
        this.calculate(n);
      } else {
        // 숫자값 입력
        this.userInput(n);
      }
    },
  },
};
</script>

<template>
  <div class="calculator">
    <form name="forms">
      <!-- 연산 결과를 출력 -->
      <!-- v-model 속성이 지정된 값을 data 영역에 포함된 이름이 동일한 속성과 바인딩 -->
      <input v-model="output" type="text" name="output" readonly />

      <!-- 이벤트 연결 진행 -> click 이벤트와 바인딩 -->
      <input type="button" class="clear" value="C" @click="clear" />
      <input
        type="button"
        class="operator"
        value="/"
        @click="operation($event)"
      />
      <input type="button" value="1" @click="operation($event)" />
      <input type="button" value="2" @click="operation($event)" />
      <input type="button" value="3" @click="operation($event)" />
      <input
        type="button"
        class="operator"
        value="*"
        @click="operation($event)"
      />
      <input type="button" value="4" @click="operation($event)" />
      <input type="button" value="5" @click="operation($event)" />
      <input type="button" value="6" @click="operation($event)" />
      <input
        type="button"
        class="operator"
        value="+"
        @click="operation($event)"
      />
      <input type="button" value="7" @click="operation($event)" />
      <input type="button" value="8" @click="operation($event)" />
      <input type="button" value="9" @click="operation($event)" />
      <input
        type="button"
        class="operator"
        value="-"
        @click="operation($event)"
      />
      <input type="button" class="dot" value="." @click="operation($event)" />
      <input type="button" value="0" @click="operation(event)" />
      <input
        type="button"
        class="operator result"
        value="="
        @click="operation($event)"
      />
    </form>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.calculator {
  width: 287px;
  border: 1px solid #333;
  background-color: #ccc;
  padding: 5px;
}

.calculator form {
  display: grid;
  grid-template-columns: repeat(4, 65px);
  grid-auto-rows: 65px;
  grid-gap: 5px;
}

.calculator form input {
  border: 2px solid #333;
  cursor: pointer;
  font-size: 19px;
}

.calculator form input:hover {
  box-shadow: 1px 1px 2px #333;
}

.calculator form .clear {
  background-color: #ed4848;
}

.calculator form .operator {
  background-color: orange;
}

.calculator form .dot {
  background-color: green;
}

.calculator form input[type='text'] {
  grid-column: span 4;
  text-align: right;
  padding: 0 10px;
}

.calculator form .clear {
  grid-column: span 3;
}

.calculator form .result {
  grid-column: span 2;
}
</style>

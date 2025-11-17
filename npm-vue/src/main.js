import { createApp, h } from 'vue';
// import App from './App.vue';

// 뷰 인스턴스의 초기값을 세팅하기 위한 함수 -> 일종의 생성자
createApp({
  // data: 뷰 인스턴스에 추가할 데이터 지정
  data() {
    return {
      message: 'Hello VueJs!',
    };
  },
  // methods: 뷰 인스턴스 내부에서 수행할 기능을 지정
  methods: {
    reverse() {
      this.message = this.message.split('').reverse().join('');
    },
  },
  // render: 화면에 출력할 방법을 지정
  render() {
    return h('div', [
      h('p', this.message),
      h('button', { onClick: this.reverse }, 'Reverse'),
    ]);
  },
}).mount('#app');

// createApp(App).mount('#app');

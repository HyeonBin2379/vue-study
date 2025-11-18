<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      notMatchedMsg: '',
      errorMsg: {
        name: '이름은 두 글자 이상 입력해야 합니다.',
        email: '올바른 이메일 형식이 아닙니다.',
        password: '비밀번호는 8글자 이상이어야 합니다.',
      },
    };
  },

  methods: {
    register() {
      alert(
        `이름: ${this.name}\n이메일: ${this.email}\n비밀번호: ${this.password}\n비밀번호 확인: ${this.passwordConfirm}`
      );
      clear();
    },

    clear() {
      this.name = '';
      this.email = '';
      this.password = '';
      this.passwordConfirm = '';
      this.notMatchedMsg = '';
    },
  },

  computed: {
    isValid() {
      let isValidInput = true;
      if (this.name.length < 2) {
        isValidInput = false;
      }
      if (!this.email.includes('@')) {
        isValidInput = false;
      }
      if (this.password.length < 8) {
        isValidInput = false;
      }
      if (this.password !== this.passwordConfirm) {
        isValidInput = false;
      }
      return isValidInput;
    },
    isValidName() {
      return this.name && this.name.length >= 2;
    },
    isValidEmail() {
      return this.email && this.email.includes('@');
    },
    isValidPassword() {
      return this.password && this.password.length >= 8;
    },
    isConfirmedPassword() {
      return this.passwordConfirm && this.password === this.passwordConfirm;
    },
  },

  watch: {
    password: {
      handler(newValue) {
        return newValue && newValue !== this.passwordConfirm
          ? (this.notMatchedMsg = '비밀번호가 일치하지 않습니다.')
          : '';
      },
      deep: true,
    },
    passwordConfirm: {
      handler(newValue) {
        return newValue && newValue !== this.password
          ? (this.notMatchedMsg = '비밀번호가 일치하지 않습니다.')
          : '';
      },
      deep: true,
    },
  },
};
</script>

<template>
  <form id="registerForm">
    <div>
      <label for="name"
        >이름:
        <input type="text" v-model="name" id="name" />
      </label>
      <p v-if="this.name && this.name.length < 2" style="color: red">
        {{ errorMsg.name }}
      </p>
    </div>
    <div>
      <label for="email"
        >이메일:
        <input type="text" v-model="email" id="email" />
      </label>
      <p v-if="this.email && !this.email.includes('@')" style="color: red">
        {{ errorMsg.email }}
      </p>
    </div>
    <div>
      <label for="password"
        >비밀번호:
        <input
          type="password"
          v-model="password"
          id="password"
          autocomplete="false"
        />
      </label>
      <p v-if="this.password && this.password.length < 8" style="color: red">
        {{ errorMsg.password }}
      </p>
    </div>
    <div>
      <label for="passwordConfirm"
        >비밀번호 확인:
        <input
          type="password"
          v-model="passwordConfirm"
          id="passwordConfirm"
          autocomplete="false"
        />
      </label>
      <p v-show="this.password !== this.passwordConfirm" style="color: red">
        {{ notMatchedMsg }}
      </p>
    </div>
    <div>
      <button v-if="isValid" type="button" @click="register">회원가입</button>
    </div>
  </form>
</template>

<style></style>

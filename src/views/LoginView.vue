<template>
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="h3 mb-3 font-weight-normal">歡迎登入</h1>
      <div class="col-8">
        <form id="form" class="form-signin" @submit.prevent="login">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="username"
              placeholder="example@example.com"
              v-model="user.username"
              required
              autofocus
            />
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="password"
              v-model="user.password"
              required
            />
            <label for="password">Password</label>
          </div>
          <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
            登入
          </button>
        </form>
      </div>
    </div>
    <p class="mt-5 mb-3 text-muted">&copy; 2023 ~ ∞ - 六角學院</p>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import axios from "axios";
import router from "../router";

export default {
  setup() {
    const state = reactive({
      user: {
        username: "",
        password: "",
      },
    });

    const login = async () => {
      const url = `${import.meta.env.VITE_URL}/admin/signin`;
      try {
        const response = await axios.post(url, state.user);
        const { token, expired } = response.data;
        document.cookie = `loginToken=${token}; expires=${new Date(expired)};`;
        router.push("/products");
      } catch (error) {
        alert(error.response.data.message);
      }
    };

    return {
      ...toRefs(state),
      login,
    };
  },
};
</script>

<style>
html,
body {
  height: 100%;
  text-align: center;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>

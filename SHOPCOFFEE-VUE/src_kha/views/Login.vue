<template>
  <section class="login-block">
    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-md-6 mx-auto border border-dark login-sec p-0">
          <h3 class="text-center bg-primary w-100 p-0 text-white">
            <b>Đăng nhập</b>
          </h3>
          <!-- <form
            @submit="login(username, password)"
            class="login-form"
            method="post"
          > -->
          <div class="form-group pl-5 pr-5">
            <label for="exampleInputEmail1" class="text-uppercase"
              >Tên đăng nhập</label
            >
            <input
              type="text"
              class="form-control"
              name="username"
              placeholder="Tên đăng nhập"
              v-model="username"
            />
          </div>
          <div class="form-group pl-5 pr-5">
            <label for="exampleInputPassword1" class="text-uppercase"
              >Mật khẩu</label
            >
            <input
              type="password"
              class="form-control"
              name="password"
              placeholder="Mật khẩu"
              v-model="password"
            />
          </div>
          <div class="form-check pl-5 pr-5 pb-4">
            <router-link to="/registration"
              >Bạn chưa có tài khoản? Đăng kí</router-link
            >
            <button
              class="btn btn-primary float-right"
              @click="login({ username, password })"
            >
              Đăng Nhập
            </button>
          </div>
          <!-- </form> -->
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// import databaseService from "@/databaseService";
// import router from '@/router';
import { mapActions } from "vuex";
export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
  },
};
</script>

<template>
  <section class="login-block">
    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-md-6 mx-auto border border-dark login-sec p-0">
          <h3 class="text-center bg-primary w-100 p-0 text-white">
            <b>Đổi mật khẩu</b>
          </h3>
          <!-- <form
            @submit="login(username, password)"
            class="login-form"
            method="post"
          > -->
          <div class="form-group pl-5 pr-5">
            <label for="exampleInputEmail1" class="text-uppercase"
              >Số điện thoại</label
            >
            <input
              type="number"
              class="form-control"
              name="phone"
              placeholder="Số điện thoại"
              v-model="phone"
            />
          </div>
          <div class="form-group pl-5 pr-5">
            <label for="exampleInputPassword1" class="text-uppercase"
              >Mật khẩu cũ</label
            >
            <input
              type="password"
              class="form-control"
              name="oldpassword"
              placeholder="Mật khẩu cũ"
              v-model="oldpassword"
            />
          </div>
          <div class="form-group pl-5 pr-5">
            <label for="exampleInputPassword1" class="text-uppercase"
              >Mật khẩu mới</label
            >
            <input
              type="password"
              class="form-control"
              name="newpassword"
              placeholder="Mật khẩu mới"
              v-model="newpassword"
            />
          </div>
          <div class="form-check pl-5 pr-5 pb-4">
            
            <button
              class="btn btn-primary float-right"
              @click="changPass"
            >
              Xác nhận
            </button>
          </div>
          <!-- </form> -->
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import databaseService from "@/databaseService";
import router from '@/router';
// import { mapActions } from "vuex";
// import { mapActions } from "vuex";
export default {
  name: "LoginPage",
  data() {
    return {
      phone: Number,
      oldpassword: "",
      newpassword: "",
    };
  },
  methods: {
    async changPass() {
      const users = await databaseService.getUser();
      const user = users.find( user => user.phone == this.phone)
      if (user) {
        if (this.oldpassword === user.password) {
          user.password = this.newpassword
          databaseService.updateUser(user.id, user)
          alert("Đổi thành công")
          // Gọi action logout từ Vuex
          this.$store.dispatch('logout').then(() => {
            // Đăng xuất thành công, chuyển hướng đến trang đăng nhập
            router.push("/login");
          });
        } else {
          alert("Sai mật khẩu")
          router.push("/changepass")
        }
      } else {
        alert("Không tìm thấy số điện thoại")
        router.push("/changepass")
      }
    }
  },
};
</script>

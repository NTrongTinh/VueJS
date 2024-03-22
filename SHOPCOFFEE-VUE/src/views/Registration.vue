<template>
  <div class="container">
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-xs-12 col-sm-12 col-md-5 well well-sm col-md-offset-4">
        <legend>
          <a href=""><i class="glyphicon glyphicon-globe"></i></a> Đăng ký thành
          viên!
        </legend>
        <form @submit.prevent="signup" method="post" class="form" role="form">
          <div class="row">
            <div class="col-xs-4 col-md-4">
              <label for="email">Tên Khách Hàng:</label>
            </div>
            <div class="col-xs-8 col-md-8">
              <input
                class="form-control"
                name="name"
                v-model="user.name"
                placeholder="Tên khách hàng"
                type="text"
              />
            </div>
            <div class="col-xs-4 col-md-4">
              <label for="email">Địa chỉ:</label>
            </div>
            <div class="col-xs-8 col-md-8">
              <input
                class="form-control"
                name="address"
                v-model="user.address"
                placeholder="Địa chỉ khách hàng"
                type="text"
              />
            </div>
            <div class="col-xs-4 col-md-4">
              <label for="email">Số Điện Thoại:</label>
            </div>
            <div class="col-xs-8 col-md-8">
              <input
                class="form-control"
                name="phone"
                v-model="user.phone"
                placeholder="Số điện thoại khách hàng"
                type="number"
              />
            </div>
            <div class="col-xs-4 col-md-4">
              <label for="email">Tên Đăng Nhập:</label>
            </div>
            <div class="col-xs-8 col-md-8">
              <input
                class="form-control"
                name="username"
                v-model="user.username"
                placeholder="Tên đăng nhập"
                type="text"
              />
            </div>
            <!-- </div><label for="email">Email:</label> <input class="form-control" name="txtemail" placeholder="Email" type="email"> -->
            <input
              class="form-control"
              name="password"
              v-model="user.password"
              placeholder="Mật khẩu"
              type="password"
            />
            <!-- <input class="form-control" name="retypepassword" placeholder="Nhập lại mật khẩu" type="password"> -->

            <button class="btn btn-lg btn-primary btn-block" type="submit">
              Đăng ký
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
// import { mapMutations,mapGetters } from "vuex";
// import axios from 'axios';
import router from "@/router";
import databaseService from "@/databaseService";
export default {
  name: "HeaderPage",
  props: {},
  data() {
    return {
      user: {
        name: "",
        address: "",
        phone: "",
        username: "",
        password: "",
      },
      isErr: false,
    };
  },
  computed: {
    // ...mapGetters(['user'])
  },
  methods: {
    async signup() {
      for (let key in this.user) {
        if (!this.user[key] || this.user[key] == undefined) {
          alert("Vui lòng nhập đầy đủ thông tin");
          this.isErr = false;
          break;
        } else {
          this.isErr = true;
        }
      }
      if (this.isErr) {
        const users = await databaseService.getUser();
        const isUser = users.find(
          (user) =>
            user.username == this.user.username || user.phone == this.user.phone
        );
        if (isUser) {
          this.isErr = false;
          alert("Tên đăng nhập hoặc số điện thoại đã có người sử dụng");
        } else {
          try {
            const response = await databaseService.addUser(this.user);
            if (response) {
              router.push("/login");
              alert("Đăng kí thành công");
            } else {
              router.push("/registration");
              alert("Đăng kí thất bại");
            }
          } catch (error) {
            console.error("Lỗi khi đăng kí:", error);
          }
        }
      }
    },
  },
};
</script>

<template>
  <div id="nav">
    This is home
    <router-link to="/about">About</router-link> |
    <router-link :to="{ name: 'Product', params: { name: '123' } }"
      >User</router-link
    >
  </div>

  <!--  -->

  <!--Section: Examples-->
  <section id="examples" class="text-center">
    <!-- Heading -->
    <div class="container">
      <div class="mx-auto mt-5">
        <h3 class="mb-3 font-weight-bold" style="color: red">
          SẢN PHẨM MỚI NHẤT
        </h3>
      </div>
      <div class="text-right ml-auto mr-5">
        <a href="/productdetails">
          <span style="color: gray">Xem chi tiết</span>
        </a>
      </div>
    </div>
    <!--Grid row-->
    <div class="row mt-4 mb-5">
      <!--Grid column-->
      <template v-for="(item, index) in products" :key="index">
        <div class="col-lg-3 col-md-4 mb-3 text-left">
          <div class="view overlay z-depth-1-half">
            <img
              :src="require(`@/assets/imgCOFFEE/${item.image}`)"
              width="250px"
              class="img-fluid"
              alt=""
            />
            <div class="mask rgba-white-slight">{{ item.name }}</div>
          </div>
          <h5 class="my-4 font-weight-bold" style="color: red">
            <sup
              ><u>{{ formatNumber(item.price) }}d</u></sup
            ><br />
          </h5>
          <a href=""> <span></span><br /></a>
          <button class="btn btn-danger" id="may4" value="lap 4">New</button>
          <h5>Số lượt xem:</h5>
        </div>
      </template>
    </div>

    <!--Grid row-->
  </section>
</template>
<script>
import databaseService from "@/databaseService";
export default {
  data() {
    return {
      // Dữ liệu của thành phần Vue
      products: [],
      newItem: {
        // Dữ liệu của mục mới
      },
    };
  },
  methods: {
    formatNumber(price) {
      if (!price) return "";
      return price.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      });
    },
    // Phương thức để lấy dữ liệu từ API khi thành phần được tạo
    async getAllProduct() {
      try {
        this.products = await databaseService.getAllProducts("products"); // Thay 'items' bằng tên tương ứng với mảng trong db.json
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
      console.log(this.products);
    },
  },
  mounted() {
    this.getAllProduct();
  },
};
</script>

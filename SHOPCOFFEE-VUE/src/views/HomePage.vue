<template>
  <!--  -->

  <!--Section: Examples-->
  <section id="examples" class="text-center slide-top">
    <!-- Heading -->
    <div class="">
      <div class="mx-auto mt-5">
        <h3 class="mb-3 font-weight-bold" style="color: red">
          SẢN PHẨM MỚI NHẤT
        </h3>
      </div>
    </div>
    <!--Grid row-->
    <div class="container">
      <div class="row mt-4 mb-5">
        <!--Grid column-->
        <template v-for="(item, index) in filteredProducts" :key="index">
          <div class="col-md-3 mb-3 text-left">
            <router-link :to="'/productdetails/' + item.id"
              ><div class="view overlay z-depth-1-half">
                <img
                  :src="require(`@/assets/imgCOFFEE/${item.imageUrl}`)"
                  width="250px"
                  class="img-fluid"
                  alt=""
                />
                <div class="mask rgba-white-slight"><h5>{{ item.name }}</h5></div>
              </div>
              <h5 class="my-4 font-weight-bold" style="color: red">{{ formatNumber(item.price) }}<sup><u>d</u></sup>
                </h5>
              </router-link>
            <!-- <button class="btn btn-danger" id="may4" value="lap 4">New</button> -->
            <h6>🕘: {{ item.cookTime }} phút</h6>
          </div>
        </template>
        <button type="button" class="btn btn-primary btn-lg mx-auto" style="background-color: brown;">
          Xem thêm
        </button>
        <!-- <button
          type="button"
          class="btn btn-primary btn-lg"
          v-show="indexShow > 8"
          @click="showLess"
        >
          Ẩn bớt
        </button> -->

      </div>
    </div>
    <!--Grid row-->
  </section>
</template>
<script>
// import databaseService from "@/databaseService";
// import databaseService from "@/databaseService";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      products: [],
      indexShow: 8,
    };
  },
  computed: {
    ...mapGetters(["filteredProducts"]),
  },
  methods: {
    formatNumber(price) {
      if (!price) return "";
      return price.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      });
    },
    ...mapActions(["getProducts"]),
    // getProductsHome() {
    //   this.products = this.filteredProducts;
    // },
    // async showMore() {
    //   this.products = await databaseService.getAllProducts();
    //   if (this.indexShow < this.products.length) {
    //     this.indexShow += 8;
    //   } else {
    //     this.indexShow = this.products.length;
    //   }
    //   this.products = this.products.slice(-this.indexShow).reverse();
    // },
    // async showLess() {
    //   this.products = await databaseService.getAllProducts();
    //   this.indexShow-=8
    //   this.products = this.products.slice(-this.indexShow).reverse();
    // },
  },
  mounted() {
    this.getProducts();
    // this.getProductsHome();
  },
};
</script>

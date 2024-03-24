<template>
  <!--Section: Examples-->
  <section id="examples" class="text-center">
    <!-- Heading -->
    <div class="container">
      <div class="mx-auto mt-5">
        <h3 class="mb-3 font-weight-bold" style="color: #53382C">
          <b><span style="font-family: 'fontkhachhang';"><h1>
            <b style="text-transform: uppercase;">{{ this.loai.tenloai }}</b>
          </h1>
        </span>
        </b>
        </h3>
      </div>
      <div class="text-right ml-auto mr-5">
        <a href="/productdetails">
          <span style="color: gray">Xem chi tiết</span>
        </a>
      </div>
    </div>
    <!--Grid row-->
    <div class="container">
      <div class="row mt-4 mb-5">
        <!--Grid column-->
        <template v-for="(item, index) in products_category" :key="index">
          <div class="col-lg-3 col-md-4 mb-3 text-left">
            <router-link :to="'/productdetails/' + item.id"><div class="view overlay z-depth-1-half">
              <img
                :src="require(`@/assets/imgCOFFEE/${item.imageUrl}`)"
                width="250px"
                class="img-fluid"
                alt=""
              />
              <div class="mask rgba-white-slight"><h5></h5></div>
            </div>
            <h5 class="my-4 font-weight-bold" style="color: red">{{ formatNumber(item.price) }}<sup><u>d</u></sup><br/>
            </h5>
            <a href=""><span>{{ item.name }}</span><br></a>
            <button class="btn btn-danger" id="may4" value="lap 4">New</button></router-link>
            <h6>🕘: {{ item.cookTime }} phút</h6>
          </div>
        </template>
      </div>
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
      loai: {},
      products: [],
      products_category: [],
      ctLoai: [],
      mang: [],
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
    async getLoaiById() {
      try {
        this.loai = await databaseService.getLoaiById(this.$route.params.id); // Thay 'items' bằng tên tương ứng với mảng trong db.json
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    },
    async getAllProduct() {
      try {
        this.products = await databaseService.getAllProducts(); // Thay 'items' bằng tên tương ứng với mảng trong db.json
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    },
    async getAllctLoai() {
      try {
        this.ctLoai = await databaseService.getAllctLoai(); // Thay 'items' bằng tên tương ứng với mảng trong db.json
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
      this.getProductsByCategoty(this.ctLoai);
    },
    // Phương thức để liên kết Products với Loại mà nó có rồi xuất ra id sản phẩm có loại đang được chọn
    async getProductsByCategoty(a) {
      for (let i = 0; i < a.length; i++)
      {
        if(this.$route.params.id === a[i]['maloai'])
        {
          this.mang.push({id: a[i]['id']});
        }
      }
      this.getProductsByCategoty_ID();
    },
    async getProductsByCategoty_ID() {
      for (let i = 0; i < this.mang.length; i++)
      {
        this.getProductById(this.mang[i]['id'])
      }
    },
    // Phương thức để lấy dữ liệu từ API khi thành phần được tạo
    async getProductById(a) {
      try {
        this.products_category.push( await databaseService.getProductById(a));
        this.dataLoaded=true
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    },
  },
  mounted() {
    this.getLoaiById();
    this.getAllProduct();
    this.getAllctLoai();
  },
};
</script>

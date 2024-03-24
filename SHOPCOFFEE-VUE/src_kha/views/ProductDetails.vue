<template>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <div class="container">
    <div class="row text-center">
      <div class="col-12">
        <h4 class="font-weight-bold text-center" style="color: red">
          CHI TIẾT SẢN PHẨM
        </h4>
      </div>
    </div>
  </div>
  <article class="col-12 mb-5">
    <!-- <div class="card"> -->
    <div class="container">
      <!-- <input type="hidden" name="action" value="giohang&add_cart"/> -->
      <div class="row">
        <div class="col-lg-6">
          <!-- <div class="tab-pane active" id=""> -->
          <img
            v-if="dataLoaded"
            :src="require(`@/assets/imgCOFFEE/${products.imageUrl}`)"
            alt=""
            width="100%"
          />
          <ul class="preview-thumbnail nav nav-tabs">
            <h4><b>Mô tả</b></h4>
          </ul>
          <span style="font-size: 16px">{{ this.products.description }}</span>
        </div>
        <div class="details col-lg-6">
          <h3 class="font-weight-bold mt-5 mb-3">{{ this.products.name }}</h3>
          <!-- <h3 class="product-title"> </h3> -->
          <!-- <div class="rating"> -->
          <div class="stars mb-2">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
          </div>
          <!-- </div> -->
          <span class="font-weight-bold">
            <span class="price" style="font-size: 18px">Giá bán: </span
            ><span class="price" style="font-size: 23px">{{
              selectedSize
                ? formatNumber(setPrice)
                : formatNumber(this.products.price)
            }}</span>
            <!-- truyền giá vào script -->
            <input type="text" id="giagoc" value="" hidden />
            <input type="text" id="gia" value="" hidden />
            <!-- truyền giá từ script vào php (sau submit) -->
            <input type="text" name="thanhtien" id="htgiaT" hidden />
            <input type="text" name="thanhtiengoc" id="htgiagocT" hidden />
            <!-- hiển thị giá -->
            <font
              id="htgia"
              style="font-size: 20px"
              class="ml-1 mt-5"
              color="red"
            ></font>

            <strike id="htgiagoc" style="font-size: 20px"></strike>

            <strike id="htgiagoc" style="font-size: 20px" hidden></strike>
          </span>
          <div style="padding-bottom: 10px; padding-top: 15px; font-size: 15px">
            Size:
          </div>
          <div class="btn-group btn-group-toggle">
            <template v-for="(item, index) in size" :key="index">
              <span class="btn-group-toggle">
                <label
                  class="btn mr-2 mb-4"
                  :class="
                    selectedSize === item ? 
                    'btn-info active' 
                    : selectedSize == null ? item.id == 1 
                    ?'btn-info active':'btn-white border-info'
                    :'btn-white border-info'
                  "
                  style="width: 140px; height: 44px"
                >
                  <input
                    type="radio"
                    name="size"
                    autocomplete="off"
                    :value="item"
                    v-model="selectedSize"
                  />
                  <div style="font-size: 15px; padding-top: 4px">
                    <div v-if="item.id == 1">S + 0 VNĐ</div>
                    <div v-if="item.id == 2">M + 6.000 VNĐ</div>
                    <div v-if="item.id == 3">L + 10.000 VNĐ</div>
                  </div>
                </label>
              </span>
            </template>
          </div>

          <div style="padding-bottom: 10px; font-size: 15px">Topping:</div>
          <div class="row">
            <template v-for="(item, index) in toppings" :key="index">
              <span class="btn-group-toggle ml-2">
                <label
                  class="mb-2 btn ml-1"
                  style="height: 44px"
                  :class="
                    selectedTopping.includes(item)
                      ? 'btn-info'
                      : 'btn-white border-info'
                  "
                >
                  <input
                    type="checkbox"
                    id=""
                    autocomplete="off"
                    :value="item"
                    v-model="selectedTopping"
                  />
                  <div
                    style="
                      font-size: 15px;
                      padding-top: 4px;
                      padding-right: 4px;
                      padding-left: 4px;
                    "
                  >
                    {{ item.name }}
                  </div>
                </label>
              </span>
            </template>
          </div>
          <div style="padding-bottom: 10px; padding-top: 15px; font-size: 15px">
            Số Lượng:
          </div>
          <input
            class="form-control font-weight-bold"
            style="width: 90px; height: 30px; font-size: 13px"
            type="number"
            id="soluong"
            name="soluong"
            min="1"
            max="100"
            value="1"
            size="10"
            v-model="soluongmua"
          />
          <div class="action">
            <button
              class="add-to-cart btn btn-info mt-3 mr-2"
              style="height: 50px"
              type="submit"
              data-toggle="modal"
              data-target="#myModal"
              @click="addToCart()"
              v-if="loggedInUser"
            >
              <div
                style="font-size: 15px; padding-right: 4px; padding-left: 4px"
              >
                <b>Thêm vào giỏ hàng</b>
              </div>
            </button>
            <button
              class="add-to-cart btn btn-info mt-3 mr-2"
              style="height: 50px"
              type="submit"
              data-toggle="modal"
              data-target="#myModal"
              @click="yeucauLogin()"
              v-if="!loggedInUser"
            >
              <div
                style="font-size: 15px; padding-right: 4px; padding-left: 4px"
              >
                <b>Thêm vào giỏ hàng</b>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </article>
  <meta v-if="check113==true" http-equiv="refresh" content="0;url=/login" />
</template>
<script>
import databaseService from "@/databaseService";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      // Dữ liệu của thành phần Vue
      products: {},
      dataLoaded: false,
      toppings: [],
      size: [],
      selectedSize: null, //lấy dữ liệu size người dùng chọn
      selectedTopping: [], //lấy dữ liệ Topping người dùng chọn
      soluongmua: 1,
      check113: false,
      newItem: {
        // Dữ liệu của mục mới
      },
    };
  },

  computed: {
    ...mapGetters(["loggedInUser"]),
    setPrice() {
      let priceTopping = 0;
      this.selectedTopping.length > 0
        ? (priceTopping = this.selectedTopping.reduce(
            (total, topping) => total + topping.price,
            0
          ))
        : (priceTopping = 0);
      return this.products.price + this.selectedSize.price + priceTopping;
    },
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
    async getProductById() {
      try {
        this.products = await databaseService.getProductById(
          this.$route.params.name
        );
        this.dataLoaded = true;
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    },

    async getAllSize() {
      try {
        this.size = await databaseService.getAllSize(); // Thay 'items' bằng tên tương ứng với mảng trong db.json
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    },

    async getAllTopping() {
      try {
        this.toppings = await databaseService.getAllTopping(); // Thay 'items' bằng tên tương ứng với mảng trong db.json
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    },

    async yeucauLogin()
    {
      alert('Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!');
      this.check113 = true;
    },

    async addToCart() {
      if (this.soluongmua != null&& this.soluongmua!='') {
        const productToAdd = {
          iduser: this.loggedInUser.id,
          idproduct: this.products.id,
          name: this.products.name,
          price: this.setPrice,
          imageUrl: this.products.imageUrl,
          size: this.selectedSize,
          toppings: this.selectedTopping,
          soluongmua: this.soluongmua,
          total: this.setPrice*this.soluongmua,
        };

        // Thêm sản phẩm vào giỏ hàng
        try {
          const cart = await databaseService.getCart();
          const product = cart.find(
            (item) =>
              item.iduser == productToAdd.iduser &&
              item.idproduct == productToAdd.idproduct &&
              item.size.id == productToAdd.size.id &&
              JSON.stringify(item.toppings.sort()) ==
                JSON.stringify(productToAdd.toppings.sort())
          ); // && item.toppings==productToAdd.toppings
          if (product) {
            product.soluongmua = product.soluongmua + productToAdd.soluongmua;
            product.total = product.total + productToAdd.total;
            await databaseService.updateCart(product.id, product);
          } else {
            await databaseService.addCart(productToAdd); // Thay 'items' bằng tên tương ứng với mảng trong db.json
          }

          alert("Bạn vừa thêm sản phẩm vào giỏ hàng");
        } catch (error) {
          console.error("Lỗi khi thêm giỏ hàng:", error);
        }
      } else {
        alert ("Nhập số lượng")
      }
    },
    check() {
      console.log(this.loggedInUser);
    },
  },
  mounted() {
    this.check();
    window.scrollTo(0, 0);
    this.getProductById();
    this.getAllSize();
    this.getAllTopping();
  },
};
</script>

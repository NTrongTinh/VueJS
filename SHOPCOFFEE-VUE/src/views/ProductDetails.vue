<template>
    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> -->
    <div class="container">
        <div class="row text-center">
            <div class="col-12">
                <h4 class="font-weight-bold text-center" style="color: red;">CHI TIẾT SẢN PHẨM</h4>
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
                            <img v-if="dataLoaded" :src="require(`@/assets/imgCOFFEE/${products.imageUrl}`)" alt="" width="100%"> 
    
    
                    </div> 
                    <div class="details col-lg-6 ">
                            <h3 class="font-weight-bold mt-5 mb-3">{{ this.products.name }}</h3>
                        <!-- <h3 class="product-title"> </h3> -->
                        <!-- <div class="rating"> -->
                            <div class="stars mb-2"> 
                                <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star"></span>
                            </div>
                        <!-- </div> -->
                        <span class="font-weight-bold">
                            <span class="price" style="font-size:18px;">Giá bán: </span><span class="price" style="font-size:23px;">{{ this.products.price/1000+'.000 VNĐ' }}</span>
                            <!-- truyền giá vào script -->
                            <input type="text" id='giagoc' value='' hidden>
                            <input type="text" id='gia' value='' hidden>
                            <!-- truyền giá từ script vào php (sau submit) -->
                            <input type="text" name="thanhtien" id="htgiaT" hidden>
                            <input type="text" name="thanhtiengoc" id="htgiagocT" hidden>
                            <!-- hiển thị giá -->
                            <font id="htgia" style="font-size:20px;" class='ml-1 mt-5 ' color="red"></font>
                            
                                <strike id='htgiagoc' style="font-size:20px;"></strike>
                            
                                <strike id='htgiagoc' style="font-size:20px;" hidden></strike >
                            
                        </span>
                        <h5 class="colors font-weight-bold"></h5>
                        <div style="padding-bottom: 10px;padding-top: 15px;font-size:15px;">Size:</div>
                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                <template v-for="(item, index) in size" :key="index">
                                    <span class="btn-group-toggle" >
                                        <label
                                            
                                            class="btn btn-info mr-2 mb-4 "
                                            style="width:140px;height:44px;"
                                        >
                                            <input 
                                                type="radio"
                                                name="size" 
                                                autocomplete="off"
                                                
                                                value="">
                                            <div style="font-size:15px;padding-top: 4px;">
                                                <div v-if="item.id ==1">
                                                    S + 0 VNĐ
                                                </div>
                                                <div v-if="item.id ==2">
                                                    M + 6.000 VNĐ
                                                </div>
                                                <div v-if="item.id ==3">
                                                    L + 10.000 VNĐ
                                                </div>
                                            </div>
                                        </label>
                                    </span>
                                </template>
                            </div>
                                
                            <div style="padding-bottom: 10px;font-size:15px;">Topping:</div>
                                <div class="row">
                                    <template v-for="(item, index) in toppings" :key="index">
                                        <span class="btn-group-toggle ml-2" data-toggle="buttons" >
                                            <label  class="mb-2 btn btn-info ml-1" style="height:44px;">
                                                <input type="checkbox" id="" 
                                                autocomplete="off" name="">
                                                <div style="font-size:15px;padding-top: 4px;padding-right: 4px;padding-left: 4px;">{{ item.name }}</div>
                                            </label>
                                        </span>
                                    </template>
                                </div>
                            <div style="padding-bottom: 10px;padding-top: 15px;font-size:15px;">Số Lượng:</div>
                            <input class="form-control font-weight-bold" style="width:90px;height:30px; font-size:13px;" type="number" id="soluong" name="soluong" 
                            min="1" max="100" value="1" size="10"/>
                        <div class="action">
                            <button class="add-to-cart btn btn-info mt-3 mr-2" style="height:50px;" type="submit" data-toggle="modal" data-target="#myModal">
                                <div style="font-size:15px;padding-right: 4px;padding-left: 4px;">
                                    <b>Thêm vào giỏ hàng</b>
                                </div>
                            </button>
                            <a href="#" target="_blank"> <button class="like btn btn-info mt-3" style="height:50px;" type="button"><span class="fa fa-heart ml-1 mr-1"></span></button></a>
                        </div>
                    </div>
                </div>
    </div>
    <!-- </div> -->
    </article>
    </template>
    <script>
    import databaseService from "@/databaseService";
    export default {
      data() {
        return {
          // Dữ liệu của thành phần Vue
          products: {
            "id": "",
            "name": "",
            "favorite": Boolean,
            "description": "",
            "price": Number,
            "imageUrl": "",
            "cookTime": "",
            "tags": []
          },
          dataLoaded: false,
          toppings: [],
          size: [],
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
        async getProductById() {
          try {
            this.products = await databaseService.getProductById(this.$route.params.name);// Thay 'items' bằng tên tương ứng với mảng trong db.json
            this.dataLoaded=true
            console.log(this.products.imageUrl);
          } catch (error) {
             
            console.error("Lỗi khi lấy dữ liệu:", error);
          }
          console.log(this.products);
        },
        async getAllSize() {
          try {
            this.size = await databaseService.getAllSize();// Thay 'items' bằng tên tương ứng với mảng trong db.json
            console.log(this.$route.params.name);
          } catch (error) {
             
            console.error("Lỗi khi lấy dữ liệu:", error);
          }
          console.log('size: '+this.size[0].name);
        },
        async getAllTopping() {
          try {
            this.toppings = await databaseService.getAllTopping();// Thay 'items' bằng tên tương ứng với mảng trong db.json
            console.log(this.$route.params.name);
          } catch (error) {
             
            console.error("Lỗi khi lấy dữ liệu:", error);
          }
          console.log(this.toppings[0].name);
        },
      },
      mounted() {
        this.getProductById();
        this.getAllSize();
        this.getAllTopping();
      },
    };
    
    </script>
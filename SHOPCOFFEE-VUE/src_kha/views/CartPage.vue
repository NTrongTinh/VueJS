<template>
    <div class="container">
      <div class="row" v-if="cart.length>0">
        <div class="col-md-12">
          <h2 class="text-center mb-4">Giỏ Hàng Của Bạn</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <div class="card mb-3" v-for="(item, index) in cart" :key="index">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img :src="require(`@/assets/imgCOFFEE/${item.imageUrl}`)" v-if="dataLoaded" class="card-img" alt="Product Image">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title text-danger">{{ item.name }}</h5>
                  <p class="card-text"><b>Size:</b> {{ item.size.name }}</p>
                  <p class="card-text"><b>Topping:</b> {{ item.toppings.map(topping => topping.name).join(', ') }}</p>
                  <p class="card-text">Đơn giá: {{ formatNumber(item.price) }}</p>
                  <p class="card-text">Số lượng: <input type="number" min="1" style="width: 50px;" class="w-10" v-model="item.soluongmua" @input="updateCart(item.id,item.soluongmua)"></p>
                  
                  <p class="card-text">Tổng cộng: {{ formatNumber(item.total) }}</p>
                </div>
                <div class="text-right">
                    <button type="button" class="btn btn-danger" @click="deleteCart(item.id)">Xóa</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4" v-if="cart.length>0">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Tổng Thanh Toán</h5>
              <p class="card-text">Tổng số lượng: {{ totalQuantity }}</p>
              <p class="card-text">Tổng tiền: {{ formatNumber(totalPrice) }}</p>
              <button class="btn btn-primary">Thanh Toán</button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="cart.length<=0" class="text-center mb-5">
        <h3>Bạn chưa có sản phẩm nào trong giỏ hàng</h3>
        <router-link to="/" class="btn btn-primary">Đi mua</router-link>
      </div>
    </div>
  </template>
  
  <script>
import databaseService from '@/databaseService';
  import {mapGetters} from "vuex";
  export default {
    data() {
        return {
            cart: [],
            dataLoaded: false,
        }
    },
    computed: {
        ...mapGetters(['loggedInUser']),
        totalQuantity() {
            const total = this.cart.reduce(
            (total, product) => total + product.soluongmua, 0)
            return total
        },
        totalPrice() {
            const total = this.cart.reduce(
            (total, product) => total + product.total, 0)
            return total
        }
    },
    methods: {
        formatNumber(price) {
      if (!price) return "";
      return price.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      });
    },
      
      async getCart() {
        if (this.loggedInUser) {
            try {
                const carts = await databaseService.getCart()
                this.dataLoaded=true
                this.cart = carts.filter(product => product.iduser===this.loggedInUser.id)
            } catch (error) {
                console.error("Lỗi lấy dữ liệu giỏ hàng:", error);
            }
        } else {
            this.cart = [];
        }
      },

    async updateCart(id,soluong){
        try {
            const product = await databaseService.getCartID(id)
            product.soluongmua = soluong
            product.total = soluong * product.price
            await databaseService.updateCart(id, product)
            const carts = await databaseService.getCart()
            this.cart = carts.filter(product => product.iduser===this.loggedInUser.id)
        } catch (error) {
            console.error("Lỗi lấy dữ liệu giỏ hàng:", error);
            
        }
    },

    async deleteCart(id) {
        try {
            await databaseService.deleteCartId(id)
            const carts = await databaseService.getCart()
            this.cart = carts.filter(product => product.iduser===this.loggedInUser.id)
        } catch (error) {
            console.error("Lỗi lấy dữ liệu giỏ hàng:", error);
            
        }
    }

    },
    mounted() {
        this.getCart()
    }
  }
  </script>
  
  <style scoped>
  /* Your custom styles */
  </style>
  
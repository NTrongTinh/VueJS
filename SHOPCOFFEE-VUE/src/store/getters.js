
export default {
    loggedInUser: state => state.loggedInUser,
    user: state => state.user,
    products: state => state.products,
    search: state => state.search,

    filteredProducts: state => {
        if (state.search.length==0) {
            return state.products.slice(-8).reverse()
        }
        return state.products.filter(product => {
          // So sánh từng ký tự của tên sản phẩm với chuỗi tìm kiếm
          for (let i = 0; i < state.search.length; i++) {
            if (product.name.toLowerCase().charAt(i) !== state.search.toLowerCase().charAt(i)) {
              return false;
            }
          }
          return true;
        });
      }
}
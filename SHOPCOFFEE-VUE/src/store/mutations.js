export default {
    setLoggedInUser(state, user) {
        state.loggedInUser = user
      },
    clearLoggedInUser(state) {
        state.loggedInUser = null
      },
    setSearch(state, search) {
      state.search = search
    },
    setProducts(state, products) {
      state.products = products
    }
}
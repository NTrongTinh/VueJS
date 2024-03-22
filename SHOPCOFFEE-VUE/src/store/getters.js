
export default {
    loggedInUser: state => state.loggedInUser,
    user: state => state.user,
    products: state => state.products,
    search: state => state.search,

    filteredProducts: state => {
        if (state.search.length === 0) {
            return state.products.slice(-8).reverse();
        } else {
            const searchTerm = state.search.toLowerCase();
            return state.products.filter(product => {
                return product.name.toLowerCase().includes(searchTerm);
            });
        }
    }
}
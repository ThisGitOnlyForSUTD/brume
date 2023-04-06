import productList from '@/mocupItem.js'

export default {
  namespaced: true,
  state: {
    products: productList
  },
  getters: {
    PRODUCTS (state) {
      return state.products
    }
  }
}

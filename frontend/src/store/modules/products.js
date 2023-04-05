import productList from '@/mocupItem'

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
